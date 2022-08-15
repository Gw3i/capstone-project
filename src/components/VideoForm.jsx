import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledLable from './StyledLabel';

export default function VideoForm() {
	return (
		<StyledForm>
			<StyledLable htmlFor="link">
				YouTube link
				<StyledInput type="text" id="link" />
			</StyledLable>
			<StyledLable htmlFor="title">
				Video title
				<StyledInput type="text" id="title" />
			</StyledLable>
			<button>Submit</button>
		</StyledForm>
	);
}
