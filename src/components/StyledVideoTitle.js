import styled, { css } from 'styled-components';

const StyledVideoTitle = styled.h2`
	color: var(--white);
	font-size: var(--h4);
	${({ position }) =>
		position === 'explore' &&
		css`
			position: absolute;
			top: 115px;
			bottom: 0;
			left: 10px;
			z-index: 50;
		`}
`;

export default StyledVideoTitle;
