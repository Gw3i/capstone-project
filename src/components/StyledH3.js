import styled, { css } from 'styled-components';

const StyledH3 = styled.h3`
	font-size: 1.6rem;
	${({ variant }) =>
		variant === 'playlists' &&
		css`
			text-align: center;
		`}
`;

export default StyledH3;
