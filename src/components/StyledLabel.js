import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-size: var(--text-m);
	${({ variant }) =>
		variant === 'playlistVideo' &&
		css`
			font-size: 1rem;
		`}
	${({ variant }) =>
		variant === 'search' &&
		css`
			text-align: center;
			font-size: var(--h4);
			font-weight: bold;
		`}
`;

export default StyledLabel;
