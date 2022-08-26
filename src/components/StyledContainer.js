import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	${({ variant }) =>
		variant === 'exploreWrapper' &&
		css`
			position: relative;
			display: block;
			margin-bottom: 30px;
			text-align: left;
		`}
	${({ variant }) =>
		variant === 'scroll' &&
		css`
			position: relative;
			max-width: 100vw;
			max-height: 500px;
			overflow-x: auto;
			gap: 10px;
			> * {
				min-width: 250px;
				height: 400px;
				overflow: hidden;
				background-color: lightgray;
				border: 1px solid grey;
				border-radius: 20px;
			}
		`}
	${({ variant }) =>
		variant === 'exploreImg' &&
		css`
			position: relative;
			display: block;
			width: 200px;
			height: 200px;
			overflow: hidden;
		`}
		${({ variant }) =>
		variant === 'channelCard' &&
		css`
			border: 2px solid black;
		`}
`;

export default StyledContainer;
