import { nanoid } from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	videos: [],
	setVideos: data => {
		set(state => {
			return {
				videos: [...state.videos, { ...data, id: nanoid() }],
			};
		});
	},
}));
export default useStore;
