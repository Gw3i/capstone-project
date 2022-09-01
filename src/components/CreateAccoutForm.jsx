import { ErrorMessage } from '@hookform/error-message';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

import StyledButton from './StyledButton';
import StyledForm from './StyledForm';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';

export default function CreateAccountForm() {
	const router = useRouter();
	const registerUser = useStore(state => state.registerUser);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		const newUser = {
			id: nanoid(),
			username: data.username,
			password: data.password,
		};
		registerUser(newUser);
		router.push('/login');
		setConfirmationMessage('Great! Your account was created');
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
									'Your password should at least have one number, one letter and on special character (?#!-...)',
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
				<StyledLabel htmlFor="age">
					Age
					<input
						{...register('age', {
							min: { value: 18, message: 'You need to be 18 or older' },
							max: { value: 99, message: 'You need to be 99 or younger' },
						})}
						name="age"
						type="number"
						id="age"
					/>
					<ErrorMessage
						errors={errors}
						name="age"
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
