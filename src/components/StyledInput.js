import styled, { css } from 'styled-components';

const StyledInput = styled.input`
	width: 274px;
	height: 24px;
	padding: 0 10px;
	border: 1px solid var(--dark);
	border-radius: 6px;
	font-size: var(--text-s);
	${({ variant }) =>
		variant === 'margin' &&
		css`
			margin: 10px 0 0;
		`}
`;

export default StyledInput;
