import styled, { css } from 'styled-components';

const StyledLink = styled.a`
	display: flex;
	max-width: 100px;
	margin: 0;
	padding: 0;
	border: none;
	text-decoration: none;
	cursor: pointer;
	${({ variant }) =>
		variant === 'channelCard' &&
		css`
			max-width: none;
			position: absolute;
			top: 30px;
			right: -20px;
			background: transparent;
			border: none;
			color: #f3f3f3;
		`}
`;

export default StyledLink;
