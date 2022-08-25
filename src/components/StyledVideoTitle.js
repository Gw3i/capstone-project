import styled, { css } from 'styled-components';

const StyledVideoTitle = styled.h2`
	position: absolute;
	bottom: 90px;
	left: 20px;
	color: white;
	font-size: 1.2rem;
	${({ position }) =>
		position === 'explore' &&
		css`
			top: 115px;
			bottom: 0;
			left: 10px;
			z-index: 50;
		`}
`;

export default StyledVideoTitle;
