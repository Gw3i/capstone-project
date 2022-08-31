import { nanoid } from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	videos: [
		{
			YouTubeLink: 'https://www.youtube.com/embed/WOkeB4ZTjFM',
			videoTitle: 'Rick an Morty on Tour',
			category: 'Science',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/shorts/Wlj3S21cxRA',
			videoTitle: 'Was wird das James Webb als nächstes finden?',
			category: 'Science',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=M2PYkZ2Y_Ls',
			videoTitle: 'Die Entstehung des Menschen',
			category: 'Biology',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=VcVsV9Yn4P4',
			videoTitle: 'Was is Geoengineering?',
			category: 'Biology',
			id: nanoid(),
			isBookmarked: false,
			timeStamp: '',
		},
	],
	setVideos: data => {
		set(state => {
			return {
				videos: [...state.videos, { ...data, id: nanoid() }],
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
		{ id: nanoid(), name: 'Daylie hacks' },
		{ id: nanoid(), name: 'Biology' },
		{ id: nanoid(), name: 'Chemistry' },
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
	user: [
		{
			id: nanoid(),
			username: 'parent123',
			passwort: 'usfib837bf#',
		},
	],
	setUser: data => {
		set(state => {
			return {
				user: [...state.user, { ...data, id: nanoid() }],
			};
		});
	},
}));
export default useStore;
