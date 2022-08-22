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
`;

export default StyledButton;
