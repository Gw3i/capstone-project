import { nanoid } from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	videos: [
		{
			YouTubeLink: 'https://www.youtube.com/embed/WOkeB4ZTjFM',
			videoTitle: 'Rick an Morty on Tour',
		},
	],
	setVideos: data => {
		set(state => {
			return {
				videos: [...state.videos, { ...data, id: nanoid() }],
			};
		});
	},
}));
export default useStore;
