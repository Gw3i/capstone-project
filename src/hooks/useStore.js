import { nanoid } from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	videos: [
		{
			YouTubeLink: 'https://www.youtube.com/embed/WOkeB4ZTjFM',
			videoTitle: 'Rick an Morty on Tour',
			category: 'sciences',
			id: nanoid(),
			isBookmarked: false,
		},
		{
			YouTubeLink: 'https://www.youtube.com/shorts/Wlj3S21cxRA',
			videoTitle: 'Was wird das James Webb als nächstes finden?',
			category: 'science',
			id: nanoid(),
			isBookmarked: false,
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=M2PYkZ2Y_Ls',
			videoTitle: 'Die Entstehung des Menschen',
			category: 'biology',
			id: nanoid(),
			isBookmarked: false,
		},
		{
			YouTubeLink: 'https://www.youtube.com/watch?v=VcVsV9Yn4P4',
			videoTitle: 'Was is Geoengineering?',
			category: 'biology',
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
		{ id: nanoid(), name: 'cooking' },
		{ id: nanoid(), name: 'geography' },
		{ id: nanoid(), name: 'math' },
		{ id: nanoid(), name: 'science' },
		{ id: nanoid(), name: 'programming' },
		{ id: nanoid(), name: 'finances' },
		{ id: nanoid(), name: 'art' },
		{ id: nanoid(), name: 'english' },
		{ id: nanoid(), name: 'daylie hacks' },
		{ id: nanoid(), name: 'biology' },
		{ id: nanoid(), name: 'chemistry' },
	],
}));
export default useStore;
