import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import useStore from '../hooks/useStore';

import AddVideoModal from './AddVideoModal';
import Icon from './Icon';
import StyledButton from './StyledButton';
import StyledContainer from './StyledContainer';
import StyledGridContainer from './StyledGridContainer';
import StyledLink from './StyledLink';
import StyledList from './StyledList';
import StyledListItem from './StyledListItem';
import StyledText from './StyledText';

export default function Playlist() {
	const channels = useStore(state => state.channels);
	const channelItems = channels?.map(channel => channel.snippet);
	const channelItem = channelItems?.map(channel => channel);
	const fetchChannelData = useStore(state => state.fetchChannelData);
	const channelPlaylists = useStore(state => state.channelPlaylists);
	const playlistVideos = useStore(state => state.playlistVideos);
	const currentItem = useStore(state => state.currentItem);
	const setCurrentVideo = useStore(state => state.setCurrentVideo);
	const currentVideo = useStore(state => state.currentVideo);
	const setCurrentPlaylist = useStore(state => state.setCurrentPlaylist);
	const currentPlaylist = useStore(state => state.currentPlaylist);

	const [isShown, setIsShown] = useState(false);

	function handleVisibility() {
		setIsShown(!isShown);
	}

	const [areShownVideos, setAreShownVideos] = useState(false);

	// Clicking outside modal closes it
	const ref = useRef();

	function useOnClickOutside(ref, handler) {
		useEffect(() => {
			const listener = event => {
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}
				handler(event);
			};
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);
			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		}, [ref, handler]);
	}

	useOnClickOutside(ref, () => setIsShown(false));

	return (
		<>
			<Link href="/create">
				<StyledLink variant="backButton">{`< Back`}</StyledLink>
			</Link>
			<StyledContainer variant="scrollPlaylists">
				{channelPlaylists
					.filter(channelPlaylist => {
						return channelPlaylist.snippet.channelId === currentItem.id;
					})
					.map(channelPlaylist => {
						return (
							<StyledList variant="playlist" key={channelPlaylist.id}>
								<StyledListItem variant="playlist">
									<Image
										src={channelPlaylist.snippet.thumbnails.standard?.url}
										alt={channelItem.channelTitle}
										objectFit="cover"
										width={190}
										height={110}
									/>
									<StyledText variant="playlist">
										{channelPlaylist.snippet.title}
									</StyledText>
									<StyledContainer variant="columnButtons">
										<StyledButton variant="StandatdFlexIcon">
											<Icon variant="add" size="16px" /> Add whole playlist
										</StyledButton>
										<StyledButton
											variant="StandatdFlexIcon"
											onClick={() => {
												setCurrentPlaylist(channelPlaylist.id);
												if (!currentPlaylist.id) {
													setAreShownVideos(!areShownVideos);
												} else {
													setAreShownVideos(true);
												}
												fetchChannelData({
													variant: 'playlistVideos',
													id: channelPlaylist.id,
												});
											}}
										>
											<Icon
												variant={
													areShownVideos &&
													channelPlaylist.id === currentPlaylist.id
														? 'arrowDown'
														: 'arrow'
												}
												size="14px"
												position={
													areShownVideos &&
													channelPlaylist.id === currentPlaylist.id
														? 'relative'
														: ''
												}
												top={
													areShownVideos &&
													channelPlaylist.id === currentPlaylist.id
														? '4px'
														: ''
												}
											/>
											Choose a playlist
										</StyledButton>
									</StyledContainer>
								</StyledListItem>
							</StyledList>
						);
					})}
			</StyledContainer>
			{channelPlaylists
				.filter(channelPlaylist => {
					return channelPlaylist.snippet.channelId === currentItem.id;
				})
				.map(channelPlaylist => {
					return (
						<>
							{areShownVideos && (
								<StyledGridContainer variant="2Columns">
									{playlistVideos
										.filter(playlistVideo => {
											return (
												playlistVideo.snippet.playlistId ===
												channelPlaylist.id
											);
										})
										.map(playlistVideo => {
											return (
												<>
													<StyledList
														variant="playlistVideo"
														key={
															playlistVideo.snippet.resourceId.videoId
														}
													>
														<StyledListItem variant="playlistVideo">
															<Image
																src={
																	playlistVideo.snippet.thumbnails
																		.standard?.url
																}
																alt={channelItem.channelTitle}
																objectFit="cover"
																width={190}
																height={110}
															/>
															<p>{playlistVideo.snippet.title}</p>
															{isShown && (
																<StyledContainer variant="overlay" />
															)}
															{isShown &&
																playlistVideo.id ===
																	currentVideo.id && (
																	<AddVideoModal
																		ref={ref}
																		onCancel={handleVisibility}
																		videoTitle={
																			playlistVideo.snippet
																				.title
																		}
																		YouTubeLink={
																			playlistVideo.snippet
																				.resourceId.videoId
																		}
																	/>
																)}
															<StyledButton
																variant="add"
																onClick={() => {
																	setCurrentVideo(
																		playlistVideo.id
																	);
																	handleVisibility();
																}}
															>
																<Icon variant="add" size="24px" />
															</StyledButton>
														</StyledListItem>
													</StyledList>
												</>
											);
										})}
								</StyledGridContainer>
							)}
						</>
					);
				})}
		</>
	);
}
