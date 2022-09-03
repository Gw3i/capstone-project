import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	max-width: 100px;
	padding: 5px 15px;
	cursor: pointer;
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
