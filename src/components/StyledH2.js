import styled, { css } from 'styled-components';

const StyledH2 = styled.h2`
	font-size: 2rem;
	${({ variant }) =>
		variant === 'channelCard' &&
		css`
			text-align: center;
			font-size: 1.6rem;
			color: #f3f3f3;
			position: absolute;
			top: 35px;
			left: 50%;
			transform: translate(-50%, -50%);
			transform: translate;
		`}
`;

export default StyledH2;
