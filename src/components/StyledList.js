import styled, { css } from 'styled-components';

const StyledList = styled.ul`
	${({ variant }) =>
		variant === 'nav' &&
		css`
			display: flex;
			position: fixed;
			z-index: 50;
			bottom: 0;
			justify-content: space-evenly;
			width: 100vw;
			margin: 0;
			padding: 5px 0;
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
			background-color: #f1f1f1;
		`}
		${({ variant }) =>
		variant === 'playlistVideo' &&
		css`
			margin: 10px 0;
			padding: 10px;
			border: 1px solid black;
			border-radius: 5px;
			background-color: lightblue;
		`}
`;

export default StyledList;
