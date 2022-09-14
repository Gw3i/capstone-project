import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import useStore from '../hooks/useStore';

import AddVideoModal from './AddVideoModal/AddVideoModal';
import ChannelCard from './ChannelCard';
import ConfirmationMessage from './ConfirmationMessage';
import Icon from './Icon';
import StyledButton from './StyledBotton/StyledButton';
import StyledContainer from './StyledContainer';
import StyledGridContainer from './StyledGridContainer';
import StyledLink from './StyledLink';
import StyledList from './StyledList';
import StyledListItem from './StyledListItem';
import StyledTypography from './StyledTypography';

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
	const addAllPlaylistVideos = useStore(state => state.addAllPlaylistVideos);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);

	const [isShown, setIsShown] = useState(false);

	const router = useRouter();

	function handleVisibility() {
		setIsShown(!isShown);
	}

	const [areShownVideos, setAreShownVideos] = useState(false);

	return (
		<>
			<Link href="/create">
				<StyledLink variant="backButton">{`< Back`}</StyledLink>
			</Link>

			{channelItem
				.filter(channel => {
					return router.query.id === channel.channelId;
				})
				.map(channel => {
					return (
						<StyledContainer
							variant="channelCardWrapperPlaylists"
							key={channel.channelId}
						>
							<StyledTypography variant="p" margin="minMargin" size="medium">
								Channel
							</StyledTypography>
							<ChannelCard channelItem={channel} />
						</StyledContainer>
					);
				})}
			<StyledTypography variant="h3" component="h2">
				Playlists: {channelPlaylists.length}
			</StyledTypography>
			<ConfirmationMessage />
			<StyledContainer variant="scrollPlaylists">
				{channelPlaylists
					?.filter(channelPlaylist => {
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
									<StyledContainer variant="columnSpaceEvenly">
										<StyledTypography
											variant="p"
											size="medium"
											align="center"
											bold="bold"
										>
											{channelPlaylist.snippet.title}
										</StyledTypography>

										<StyledButton
											variant="standardFlexIcon"
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
			{areShownVideos && (
				<StyledContainer variant="margin10TopBottom">
					<StyledButton
						variant="standardFlexIcon"
						onClick={() => {
							addAllPlaylistVideos();
							setConfirmationMessage('Great! All playlist videos were added');
						}}
					>
						<Icon variant="add" size="16px" /> Add whole playlist
					</StyledButton>
				</StyledContainer>
			)}
			{channelPlaylists
				?.filter(channelPlaylist => {
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
															<StyledTypography
																variant="p"
																padding="minSides"
															>
																{playlistVideo.snippet.title}
															</StyledTypography>
															{isShown &&
																playlistVideo.id ===
																	currentVideo.id && (
																	<>
																		<AddVideoModal
																			onCancel={
																				handleVisibility
																			}
																			videoTitle={
																				playlistVideo
																					.snippet.title
																			}
																			YouTubeLink={
																				playlistVideo
																					.snippet
																					.resourceId
																					.videoId
																			}
																		/>
																		<StyledContainer
																			variant="overlay"
																			onClick={() => {
																				setIsShown(
																					!isShown
																				);
																			}}
																		/>
																	</>
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
