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
		variant === 'tags' &&
		css`
			max-width: none;
			flex-direction: row;
			padding: 4px 10px;
			border: 2px solid black;
			border-radius: 6px;
			font-size: 1.2rem;
			font-weight: bold;
			white-space: nowrap;
		`}
`;

export default StyledLink;
