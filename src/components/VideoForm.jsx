import useStore from '../hooks/useStore';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledLable from './StyledLabel';

export default function VideoForm() {
	const [inputLinkValue, setInputLinkValue] = useStore('');
	const [inputTitleValue, setInputTitleValue] = useStore('');

	const videoLink = useStore(state => state.videoLink);
	const setVideoLink = useStore(state => state.setVideoLink);
	const videoTitle = useStore(state => state.videoTitle);
	const setVideoTitle = useStore(state => state.setVideoTitle);

	return (
		<StyledForm
			onSubmit={event => {
				event.preventDefault();
				setVideoLink(inputLinkValue);
				setVideoTitle(inputTitleValue);
				setInputLinkValue('');
				setInputTitleValue('');
			}}
		>
			<StyledLable htmlFor="link">
				YouTube link
				<StyledInput
					onChange={event => {
						setInputLinkValue(event.target.value);
					}}
					value={videoLink}
					type="text"
					id="link"
				/>
			</StyledLable>
			<StyledLable htmlFor="title">
				Video title
				<StyledInput
					onChange={event => {
						setInputTitleValue(event.target.value);
					}}
					type="text"
					id="title"
					value={videoTitle}
				/>
			</StyledLable>
			<button>Submit</button>
		</StyledForm>
	);
}
