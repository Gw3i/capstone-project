import useStore from '../hooks/useStore';

import StyledButton from './StyledButton';
import StyledSection from './StyledSection';

export default function DeleteModal({ onDelete, videoId }) {
	const deleteVideo = useStore(state => state.deleteVideo);

	console.log(videoId);

	return (
		<StyledSection>
			<h2>Are you sure you want to delete this video?</h2>
			<StyledButton onClick={onDelete}>Cancel</StyledButton>
			<StyledButton
				variant="delete"
				onClick={() => {
					deleteVideo(videoId);
				}}
			>
				Delete
			</StyledButton>
		</StyledSection>
	);
}
