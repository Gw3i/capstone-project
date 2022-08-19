import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import useStore from '../../hooks/useStore';
import StyledButton from '../StyledButton';
import StyledForm from '../StyledForm';
import StyledInputWarning from '../StyledInputWarning';
import StyledLabel from '../StyledLabel';

export default function EditForm() {
	const router = useRouter();
	const setVideos = useStore(state => state.setVideos);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		setVideos(data);
		reset();
		router.push('/');
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel htmlFor="title">
					Video title
					<input
						{...register('videoTitle', {
							required: 'This field is required',
							minLength: { value: 10, message: 'The min. length is 10 characters' },
						})}
						placeholder="How to cook spaghetti..."
						name="videoTitle"
						type="text"
						id="title"
					/>
					<ErrorMessage
						errors={errors}
						name="videoTitle"
						render={({ messages }) =>
							messages &&
							Object.entries(messages).map(([type, message]) => (
								<StyledInputWarning key={type} role="alert">
									{message}
								</StyledInputWarning>
							))
						}
					/>
				</StyledLabel>
				<StyledButton>Submit</StyledButton>
			</StyledForm>
		</>
	);
}
