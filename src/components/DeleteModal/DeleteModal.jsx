import useStore from '../../hooks/useStore';
import StyledButton from '../StyledButton';
import StyledContainer from '../StyledContainer';
import StyledModalSection from '../StyledModalSection';
import StyledTypography from '../StyledTypography';

export default function DeleteModal({ onCancel, videoId }) {
	const deleteVideo = useStore(state => state.deleteVideo);

	return (
		<StyledModalSection>
			<StyledTypography variant="h3" decoration="modal" component="p">
				Are you sure you want to delete this video?
			</StyledTypography>
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
