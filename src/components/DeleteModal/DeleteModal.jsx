import useStore from '../../hooks/useStore';
import StyledButton from '../StyledButton';
import StyledContainer from '../StyledContainer';
import StyledModalSection from '../StyledModalSection';
import Typography from '../Typography';

export default function DeleteModal({ onCancel, videoId }) {
	const deleteVideo = useStore(state => state.deleteVideo);

	return (
		<StyledModalSection variant="delete">
			<Typography variant="h3" decoration="modal" component="p">
				Are you sure you want to delete this video?
			</Typography>
			<StyledContainer variant="buttons">
				<StyledButton variant="standard" type="button" onClick={onCancel}>
					Cancel
				</StyledButton>
				<StyledButton
					type="button"
					variant="highlight"
					onClick={() => {
						deleteVideo(videoId);
					}}
				>
					Delete
				</StyledButton>
			</StyledContainer>
		</StyledModalSection>
	);
}
