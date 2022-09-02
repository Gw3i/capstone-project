import styled, { css } from 'styled-components';

const StyledLink = styled.a`
	text-decoration: none;
	cursor: pointer;
	${({ variant }) =>
		variant === 'default' &&
		css`
			display: flex;
			max-width: 100px;
			margin: 0;
			padding: 0;
			border: none;
			cursor: pointer;
		`}
`;

export default StyledLink;
