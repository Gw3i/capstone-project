import styled, { css } from 'styled-components';

const StyledH2 = styled.h2`
	font-size: var(--h2);
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
	${({ variant }) =>
		variant === 'borderBottom' &&
		css`
			border-bottom: 4px solid var(--accent-yellow);
			line-height: 20px;
			margin: 20px 0;
		`}
`;

export default StyledH2;
