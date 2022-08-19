import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	max-width: 100px;
	padding: 5px 15px;
	cursor: pointer;
	${({ variant }) =>
		variant === 'deleteIcon' &&
		css`
			position: absolute;
			top: 60px;
			right: 30px;
			width: 48px;
			height: 48px;
			background-color: transparent;
			border: none;
		`}
	${({ variant }) =>
		variant === 'editIcon' &&
		css`
			position: absolute;
			top: 110px;
			right: 30px;
			width: 48px;
			height: 48px;
			background-color: transparent;
			border: none;
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
