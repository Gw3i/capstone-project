import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	padding: 3px 12px;
	cursor: pointer;
	${({ variant }) =>
		variant === 'standard' &&
		css`
			background-color: transparent;
			border: 2px solid var(--dark);
			border-radius: 6px;
		`}
	${({ variant }) =>
		variant === 'filled' &&
		css`
			border: 1px solid var(--dark);
			border-radius: 6px;
			background-color: var(--dark);
			color: var(--white);
		`}
		${({ variant }) =>
		variant === 'standardFlexIcon' &&
		css`
			background-color: transparent;
			border: 1px solid var(--dark);
			border-radius: 6px;
			display: flex;
			gap: 2px;
		`}
		${({ variant }) =>
		variant === 'add' &&
		css`
			width: 32px;
			height: 32px;
			padding: 2px;
			margin: 5px;
			max-width: none;
			background-color: #fcfdff;
			border: 2px solid black;
			border-radius: 8px;
			align-self: flex-end;
		`}
	${({ variant }) =>
		variant === 'videoIcons' &&
		css`
			background-color: transparent;
			border: none;
			display: flex;
			padding: 0;
			margin: 0;
		`}
	${({ variant }) =>
		variant === 'delete' &&
		css`
			background-color: lightsalmon;
			border: 2px solid salmon;
			border-radius: 2px;
		`}
	${({ variant }) =>
		variant === 'playlist' &&
		css`
			max-width: none;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 160px;
			padding: 0;
			border: 1px solid black;
			border-radius: 6px;
			background-color: transparent;
		`}
`;

export default StyledButton;
