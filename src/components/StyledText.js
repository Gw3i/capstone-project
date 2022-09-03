import styled, { css } from 'styled-components';

const StyledText = styled.p`
	${({ variant }) =>
		variant === 'playlist' &&
		css`
			font-size: 1.3rem;
			text-align: center;
		`}
`;

export default StyledText;
