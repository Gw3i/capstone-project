import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	max-width: 100px;
	padding: 5px 15px;
	cursor: pointer;
	${({ variant }) =>
		variant === 'delete' &&
		css`
			position: absolute;
			top: 40px;
			right: 30px;
			width: 48px;
			height: 48px;
			background-color: transparent;
			border: none;
		`}
`;

export default StyledButton;
