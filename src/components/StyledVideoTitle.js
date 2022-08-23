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
			top: 300px;
			bottom: 0;
			left: 15px;
			padding: 10px;
			border-radius: 5px;
		`}
`;

export default StyledVideoTitle;
