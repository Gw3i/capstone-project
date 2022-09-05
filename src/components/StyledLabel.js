import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-size: 1.2rem;
	${({ variant }) =>
		variant === 'playlistVideo' &&
		css`
			font-size: 1rem;
		`}
`;

export default StyledLabel;
