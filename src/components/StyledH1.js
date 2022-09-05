import styled, { css } from 'styled-components';

const StyledH1 = styled.h1`
	font-size: var(--h1);
	${({ variant }) =>
		variant === 'borderBottom' &&
		css`
			border-bottom: 4px solid var(--accent-yellow);
			line-height: 20px;
			margin: 65px 0 40px;
			line-height: 25px;
		`}
`;

export default StyledH1;
