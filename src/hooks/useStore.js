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
	fetchedData: { data: [] },
	fetchSomething: async url => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			set({ fetchedData: data });
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},
	channelId: null,
	setChannelId: id => {
		set(state => {
			return {
				channelId: (state.channelId = id),
			};
		});
	},
	playlistId: null,
	setPlaylistId: id => {
		set(state => {
			return {
				playlistId: (state.playlistId = id),
			};
		});
	},
	currentItem: '',
	setCurrentItem: id => {
		set(() => {
			return {
				currentItem: { id: id },
			};
		});
	},
}));
export default useStore;
