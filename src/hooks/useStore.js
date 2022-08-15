import create from 'zustand';

const useStore = create(set => ({
	videos: [],
	setVideos: video => {
		set(state => {
			return {
				video: [...state.video, { video }],
			};
		});
	},
}));
export default useStore;
