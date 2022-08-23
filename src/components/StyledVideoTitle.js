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
			bottom: 40px;
			left: 15px;
		`}
`;

export default StyledVideoTitle;
