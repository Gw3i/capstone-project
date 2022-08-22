import useStore from '../../hooks/useStore';
import StyledButton from '../StyledButton';
import StyledModalSection from '../StyledModalSection';

export default function DeleteModal({ onCancel, videoId }) {
	const deleteVideo = useStore(state => state.deleteVideo);

	return (
		<StyledModalSection>
			<h2>Are you sure you want to delete this video?</h2>
			<StyledButton type="button" onClick={onCancel}>
				Cancel
			</StyledButton>
			<StyledButton
				type="button"
				variant="delete"
				onClick={() => {
					deleteVideo(videoId);
				}}
			>
				Delete
			</StyledButton>
		</StyledModalSection>
	);
}
