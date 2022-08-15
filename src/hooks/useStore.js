import create from 'zustand';

const useStore = create(set => ({
	videos: [],
	setVideo: video => {
		set(state => {
			return {
				videos: [...state.videos, video],
			};
		});
	},
}));
export default useStore;
