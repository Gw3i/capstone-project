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
		},
		{
			YouTubeLink: 'https://www.youtube.com/shorts/Wlj3S21cxRA',
			videoTitle: 'Was wird das James Webb als nächstes finden?',
			category: 'Science',
			id: nanoid(),
			isBookmarked: false,
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=M2PYkZ2Y_Ls',
			videoTitle: 'Die Entstehung des Menschen',
			category: 'Biology',
			id: nanoid(),
			isBookmarked: false,
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=VcVsV9Yn4P4',
			videoTitle: 'Was is Geoengineering?',
			category: 'Biology',
			id: nanoid(),
			isBookmarked: false,
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
}));
export default useStore;
