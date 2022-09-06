import styled, { css } from 'styled-components';

const StyledNavLink = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0;
	font-size: var(--text-s);
	text-decoration: none;
	${({ variant }) =>
		variant === 'bold' &&
		css`
			font-weight: bold;
		`}
`;

export default StyledNavLink;
