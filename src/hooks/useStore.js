import { nanoid } from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	video: [],
	setVideo: (link, title) => {
		set(state => {
			return {
				video: [...state.video, { link, title, id: nanoid() }],
			};
		});
	},
}));
export default useStore;
