import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	videoLink: [],
	setVideoLink: link => {
		set(state => {
			return {
				videoLink: [...state.videoLink, {link, id: nanoid()}],
			};
		});
	},
	videoTitle: [],
	setVideoTitle: title => {
		set(state => {
			return {
				videoLink: [...state.videoTitle, {title, id: nanoid()}],
			};
		});
	},
}));

export default useStore;
