import useStore from '../hooks/useStore';

import StyledSection from './StyledSection';

export default function DeleteModal({ onDelete, videoId }) {
	const deleteVideo = useStore(state => state.deleteVideo);

	console.log(videoId);

	return (
		<StyledSection>
			<h2>Are you sure you want to delete this video?</h2>
			<button onClick={onDelete}>Cancel</button>
			<button
				onClick={() => {
					deleteVideo(videoId);
				}}
			>
				Delete
			</button>
		</StyledSection>
	);
}
