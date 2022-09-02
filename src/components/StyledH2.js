import styled, { css } from 'styled-components';

const StyledH2 = styled.h2`
	font-size: 2rem;
	${({ variant }) =>
		variant === 'channelCard' &&
		css`
			text-align: center;
			color: #f3f3f3;
			position: absolute;
			top: 30px;
			left: 50%;
			transform: translate(-50%, -50%);
			transform: translate;
		`}
`;

export default StyledH2;
