import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import StyledButton from './StyledButton';
import StyledForm from './StyledForm';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit() {
		reset();
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel htmlFor="username">
					Username
					<input
						{...register('username', {
							required: 'This field is required',
							pattern: {
								value: 3,
								message: 'The min. length is 3 characters',
							},
						})}
						placeholder="parent123"
						name="username"
						type="text"
						id="username"
					/>
					<ErrorMessage
						errors={errors}
						name="username"
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
				<StyledLabel htmlFor="password">
					Password
					<input
						{...register('password', {
							required: 'This field is required',
							minLength: { value: 10, message: 'The min. length is 10 characters' },
						})}
						placeholder="*************"
						name="password"
						type="text"
						id="password"
					/>
					<ErrorMessage
						errors={errors}
						name="password"
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

				<StyledButton>Login</StyledButton>
			</StyledForm>
		</>
	);
}
