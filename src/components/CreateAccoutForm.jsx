import { ErrorMessage } from '@hookform/error-message';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
	const users = useStore(state => state.users);
	const [loginInformationError, setfalseloginInformationError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		//const dateOfBirth = new Date('09/07/1987');
		const dateOfBirth = new Date(data.age);
		const dateToday = new Date();

		function calculateDiffYears(dt2, dt1) {
			let diff = (dt2.getTime() - dt1.getTime()) / 1000;
			diff /= 60 * 60 * 24;
			return Math.abs(Math.round(diff / 365.25));
		}

		const age = calculateDiffYears(dateToday, dateOfBirth);

		const newUser = {
			id: nanoid(),
			username: data.username,
			password: data.password,
		};
		const sameUsername = users.filter(user => {
			return newUser.username === user.username;
		});

		if (sameUsername < 1 && age >= 18) {
			registerUser(newUser);
			router.push('/create');
			setConfirmationMessage('Great! Your account was created');
		} else {
			setfalseloginInformationError(true);
		}
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
						onChange={() => {
							setfalseloginInformationError(false);
						}}
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
					{loginInformationError && (
						<StyledInputWarning role="alert">
							This username is already taken. Please choose another.
						</StyledInputWarning>
					)}
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
					<input {...register('age')} name="age" type="date" id="age" />
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
