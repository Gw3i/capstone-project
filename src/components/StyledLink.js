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
	${({ variant }) =>
		variant === 'tags' &&
		css`
			max-width: none;
			flex-direction: row;
			padding: 3px 12px;
			background-color: transparent;
			border: 2px solid var(--dark);
			border-radius: 6px;
			font-size: var(--text-m);
			font-weight: bold;
			white-space: nowrap;
		`}
		${({ variant }) =>
		variant === 'backButton' &&
		css`
			position: absolute;
			top: 2%;
			left: 5%;
			font-weight: bold;
		`}
		${({ variant }) =>
		variant === 'buttonSmall' &&
		css`
			padding: 3px 12px;
			background-color: transparent;
			border: 2px solid var(--dark);
			border-radius: 6px;
			font-size: var(--text-s);
			font-weight: bold;
		`}
		${({ variant }) =>
		variant === 'link' &&
		css`
			color: var(--accent-purple);
			text-decoration: underline;
		`}
`;

export default StyledLink;
