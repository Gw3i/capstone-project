import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

import StyledButton from './StyledButton';
import StyledContainer from './StyledContainer';
import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import StyledInputWarning from './StyledInputWarning';
import StyledLabel from './StyledLabel';
import StyledLink from './StyledLink';
import Typography from './Typography';
import Vectors from './Vectors';

export default function LoginForm() {
	const setLoginSession = useStore(state => state.setLoginSession);
	const router = useRouter();
	const [loginInformationError, setfalseloginInformationError] = useState(false);
	const setConfirmationMessage = useStore(state => state.setConfirmationMessage);

	const users = useStore(state => state.users);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });

	function onSubmit(data) {
		const loggedInUser = {
			username: data.username,
			password: data.password,
		};

		const validateUser = users.filter(user => {
			return (
				user.username === loggedInUser.username && user.password === loggedInUser.password
			);
		});

		if (validateUser.length === 1) {
			setLoginSession(loggedInUser);
			setConfirmationMessage('Great! You are logged in now');
			router.push('/create');
		} else {
			setfalseloginInformationError(true);
		}
	}

	return (
		<>
			<Vectors variant="bigBlobExplore" />
			<Vectors variant="smallBlob" />
			<Vectors variant="bigPurpleLogin" />
			<StyledContainer variant="exploreWrapper">
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
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
						<StyledInput
							{...register('password', {
								required: 'This field is required',
								minLength: {
									value: 10,
									message: 'The min. length is 10 characters',
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

					<StyledButton variant="submit">Login</StyledButton>
				</StyledForm>
				{loginInformationError && (
					<StyledInputWarning role="alert">
						Your login information is wrong. Please try again.
					</StyledInputWarning>
				)}
				<StyledContainer variant="column">
					<Typography variant="p" margin="minMargin" size="medium">
						No account yet?
					</Typography>
					<Link href="/create-account">
						<StyledLink variant="link">Create new account</StyledLink>
					</Link>
				</StyledContainer>
			</StyledContainer>
		</>
	);
}
