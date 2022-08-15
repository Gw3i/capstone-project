import { useForm } from 'react-hook-form';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledLable from './StyledLabel';

export default function VideoForm() {
	const { register, handleSubmit } = useForm();

	return (
		<>
			<StyledForm
				onSubmit={handleSubmit(data => {
					console.log(data);
				})}
			>
				<StyledLable htmlFor="link">
					YouTube link
					<StyledInput
						{...register('YouTubeLink', {
							required: 'This field is required',
							minLength: {
								value: 15,
								message: 'Min. length is 15 symbols',
								pattern: /^(https:\/\/www.youtube.com\/)[^\s$.#]*$/gi,
							},
						})}
						type="text"
						id="link"
					/>
				</StyledLable>
				<StyledLable htmlFor="title">
					Video title
					<StyledInput
						{...register('videoTitle', {
							required: 'This field is required',
							minLength: { value: 15, message: 'Min. length is 15 symbols' },
						})}
						type="text"
						id="title"
					/>
				</StyledLable>
				<button>Submit</button>
			</StyledForm>
		</>
	);
}
