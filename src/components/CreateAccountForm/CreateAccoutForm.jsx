import { ErrorMessage } from '@hookform/error-message';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useStore from '../../hooks/useStore';
import EmojiIcons from '../EmojiIcons';
import StyledButton from '../StyledBotton/StyledButton';
import StyledForm from '../StyledForm';
import StyledInput from '../StyledInput';
import StyledInputWarning from '../StyledInputWarning';
import StyledLabel from '../StyledLabel';
import Vectors from '../Vectors';

export default function CreateAccountForm() {
	const router = useRouter();
	const registerUser = useStore(state => state.registerUser);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);
	const users = useStore(state => state.users);
	const [loginInformationError, setLoginInformationError] = useState(false);
	const [loginAgeError, setLoginAgeError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		if (parseInt(data.age) > new Date().getFullYear()) {
			setLoginAgeError('This date is not valid');
			return data.age;
		}

		const calculateAge = dayOfBirth => {
			const ageDifMs = Date.now() - new Date(dayOfBirth).getTime();
			const ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		};

		const age = calculateAge(data.age);
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
			age < 18
				? setLoginAgeError('You are too young!')
				: setLoginInformationError(
						'This username is already taken. Please choose another one'
				  );
		}
	}

	return (
		<>
			<EmojiIcons variant="thunder" />
			<Vectors variant="bigBlobCreateAccount" />
			<Vectors variant="smallBlobCreateAccount" />
			<Vectors variant="bigPurpleCreateAccount" />
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<EmojiIcons variant="smileySurprised" />
				<EmojiIcons variant="highlightLogin" />
				<StyledLabel htmlFor="username">
					Username
					<StyledInput
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
							setLoginInformationError(false);
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
					<StyledInputWarning role="alert">{loginInformationError}</StyledInputWarning>
				</StyledLabel>
				<StyledLabel htmlFor="password">
					Password
					<StyledInput
						{...register('password', {
							required: 'This field is required',
							minLength: { value: 10, message: 'The min. length is 10 characters' },
							pattern: {
								value: /^(?=.*[A-Za-zäöüÄÖÜß])(?=.*\d)(?=.*[@$!%*#?&zäöüÄÖÜß])[A-Za-zäöüÄÖÜß\d@$!%*#?&zäöüÄÖÜß]{8,}$/gi,
								message:
									'Your password should have at least one number, one letter and one special character (?#!-...)',
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
					<StyledInput
						{...register('age', {
							required: 'This field is required',
						})}
						name="age"
						type="date"
						id="age"
						onChange={() => {
							setLoginAgeError(false);
						}}
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
					<StyledInputWarning role="alert">{loginAgeError}</StyledInputWarning>
				</StyledLabel>

				<StyledButton variant="submit">Create new account</StyledButton>
			</StyledForm>
		</>
	);
}
