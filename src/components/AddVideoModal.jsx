import StyledButton from './StyledButton';
import StyledModalSection from './StyledModalSection';

export default function AddVideoModal({ onCancel }) {
	return (
		<StyledModalSection variant="addVideo">
			<h2>Please add your video to a category</h2>
			<StyledButton onClick={onCancel} type="button">
				Cancel
			</StyledButton>
			<StyledButton type="button">Add</StyledButton>
		</StyledModalSection>
	);
}
