import StyledSection from './StyledSection';

export default function DeleteModal({ onDelete }) {
	return (
		<StyledSection>
			<h2>Are you sure you want to delete this video?</h2>
			<button onClick={onDelete}>Cancel</button>
			<button>Delete</button>
		</StyledSection>
	);
}
