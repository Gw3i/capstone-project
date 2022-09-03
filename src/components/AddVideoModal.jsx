import StyledButton from './StyledButton';
import StyledModalSection from './StyledModalSection';

export default function AddVideoModal() {
	return (
		<StyledModalSection>
			<h2>Please add your video to a category</h2>
			<StyledButton type="button">Cancel</StyledButton>
			<StyledButton type="button">Add</StyledButton>
		</StyledModalSection>
	);
}
