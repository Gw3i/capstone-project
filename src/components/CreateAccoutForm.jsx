import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

import StyledButton from './StyledButton';
import StyledForm from './StyledForm';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';

export default function CreateAccountForm() {
	const setUser = useStore(state => state.setUser);
	const user = useStore(state => state.user);

	console.log(user);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		setUser(data);
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
							pattern: {
								value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gi,
								message:
									'Your password should at least have one number, one letter and on special character',
							},
						})}
						placeholder="*************"
						name="password"
						type="password"
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

				<StyledButton>Create new account</StyledButton>
			</StyledForm>
		</>
	);
}
