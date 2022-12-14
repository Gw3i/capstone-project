import styled, { css } from 'styled-components';

const StyledList = styled.ul`
	${({ variant }) =>
		variant === 'nav' &&
		css`
			display: flex;
			position: fixed;
			z-index: 1000;
			bottom: 0;
			justify-content: space-evenly;
			width: 100vw;
			margin: 0;
			padding: 10px 0;
			border-top: 2px solid black;
			background-color: white;
		`}
	${({ variant }) =>
		variant === 'playlist' &&
		css`
			margin: 10px 0;
			padding: 10px;
			border: 1px solid black;
			border-radius: 5px;
			background-color: #fcfdff;
		`}
		${({ variant }) =>
		variant === 'playlistVideo' &&
		css`
			padding: 0;
			justify-content: center;
			border: 1px solid black;
			border-radius: 5px;
			border: var(--border-accent);
		`}
		${({ variant }) =>
		variant === 'tags' &&
		css`
			display: flex;
			max-width: 100vw;
			padding: 0 10px;
			gap: 10px;
			margin: 0 0 2px 0;
			overflow-x: scroll;
			> a {
				width: auto;
			}
			@media screen and (min-width: 376px) {
				justify-content: center;
			}
		`}
`;

export default StyledList;
