import { nanoid } from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	videos: [
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=6ddfTk3u75Y',
			videoTitle: 'Warum vergeht Zeit?',
			category: 'Science',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/embed/LqbIQ_17z2E',
			videoTitle: 'Die Wahrheit über Bananen',
			category: 'Biology',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/shorts/E43AOYdvJaM',
			videoTitle: 'Dinkelkasten Brot Rezept am Ende des Videos 😍',
			category: 'Cooking',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=R2ZFgLROtTY',
			videoTitle: 'Aktien einfach erklärt',
			category: 'Finances',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=zCkx1pmXhEY',
			videoTitle: 'Vulkane einfach erklärt',
			category: 'Climate',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=HYuqC13LZ1Q',
			videoTitle: 'Weshalb Freunde wichtig sind',
			category: 'Biology',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=m62QcCAkm88',
			videoTitle: 'Leben & Größen',
			category: 'Science',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://youtu.be/qqMZCtnEop8',
			videoTitle: 'Die beste Zahl der Welt',
			category: 'Math',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=zCkx1pmXhEY',
			videoTitle: 'Vulkane einfach erklärt',
			category: 'Climate',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/shorts/eCW9KlwM8f4',
			videoTitle: 'Vulkane einfach erklärt',
			category: 'Biology',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/shorts/ZGAZO8QzS4A',
			videoTitle: 'Leben auf dem Mond vielleicht bald möglich',
			category: 'Around the world',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
	],
	setVideos: data => {
		set(state => {
			return {
				videos: [{ ...data, id: nanoid() }, ...state.videos],
			};
		});
	},
	deleteVideo: _id => {
		set(state => {
			return {
				videos: state.videos.filter(video => video.id !== _id),
			};
		});
	},
	setIsBookmarked: id => {
		set(state => {
			return {
				videos: state.videos.map(video =>
					video.id === id ? { ...video, isBookmarked: !video.isBookmarked } : video
				),
			};
		});
	},
	setTimeStamp: id => {
		set(state => {
			return {
				videos: state.videos.map(video =>
					video.id === id ? { ...video, timeStamp: new Date() } : video
				),
			};
		});
	},
	categories: [
		{ id: nanoid(), name: 'Cooking' },
		{ id: nanoid(), name: 'Geography' },
		{ id: nanoid(), name: 'Math' },
		{ id: nanoid(), name: 'Science' },
		{ id: nanoid(), name: 'Programming' },
		{ id: nanoid(), name: 'Finances' },
		{ id: nanoid(), name: 'Art' },
		{ id: nanoid(), name: 'English' },
		{ id: nanoid(), name: 'Daily hacks' },
		{ id: nanoid(), name: 'Biology' },
		{ id: nanoid(), name: 'Chemistry' },
		{ id: nanoid(), name: 'Climate' },
		{ id: nanoid(), name: 'History' },
		{ id: nanoid(), name: 'Around the world' },
		{ id: nanoid(), name: 'Uncategorized' },
	],
	confirmationMessage: null,
	setConfirmationMessage: message => {
		set(state => {
			return {
				confirmationMessage: (state.confirmationMessage = message),
			};
		});
	},
	currentItem: '',
	setCurrentItem: id => {
		set({
			currentItem: { id },
		});
	},
	currentVideo: '',
	setCurrentVideo: id => {
		set({
			currentVideo: { id },
		});
	},
	currentPlaylist: '',
	setCurrentPlaylist: id => {
		set({
			currentPlaylist: { id },
		});
	},
	channelSearch: [],
	setChannelSearch: data => {
		set(() => {
			return {
				channelSearch: data,
			};
		});
	},
	channels: [],
	channelPlaylists: [],
	playlistVideos: [],
	addAllPlaylistVideos: () => {
		set(state => {
			return {
				videos: [
					...state.videos,
					...state.playlistVideos.map(playlistVideo => {
						return {
							YouTubeLink: `https://www.youtube.com/embed/${playlistVideo.snippet.resourceId.videoId}`,
							videoTitle: playlistVideo.snippet.title,
							category: 'Uncategorized',
							id: nanoid(),
							isBookmarked: false,
							timeStamp: '',
						};
					}),
				],
			};
		});
	},
	fetchChannelData: async ({ variant, searchQuery, id }) => {
		try {
			if (variant === 'channels') {
				const response = await fetch(
					`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${searchQuery}&type=channel&key=${process.env.NEXT_PUBLIC_API_KEY}`
				);
				const data = await response.json();
				set({ channels: data.items });
			} else if (variant === 'channelPlaylists') {
				const response = await fetch(
					`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${id}&maxResults=25&key=${process.env.NEXT_PUBLIC_API_KEY}`
				);
				const data = await response.json();
				set({ channelPlaylists: data.items });
			} else if (variant === 'playlistVideos') {
				const response = await fetch(
					`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${process.env.NEXT_PUBLIC_API_KEY}`
				);
				const data = await response.json();
				set({ playlistVideos: data.items });
			}
		} catch (error) {
			console.error(`Upps, there is a problem: ${error}`);
		}
	},
	users: [],
	registerUser: user => {
		set(state => {
			return {
				users: [...state.users, user],
			};
		});
	},
	loginSession: null,
	setLoginSession: loginData => {
		set(() => {
			return {
				loginSession: loginData,
			};
		});
	},
}));
export default useStore;
