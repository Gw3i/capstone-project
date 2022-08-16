import create from 'zustand';

const useStore = create(set => ({
	videos: [],
	setVideos: videoModel => {
		set(state => {
			return {
				videos: [...state.videos, { videoModel }],
			};
		});
	},
}));
export default useStore;
