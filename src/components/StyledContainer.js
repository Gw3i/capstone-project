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
			margin-top: 20px;
			border: 2px solid black;
			border-radius: 5px;
			min-width: 300px;
			padding: 10px;
			gap: 20px;
		`}
		${({ variant }) =>
		variant === 'channelCardText' &&
		css`
			flex-direction: column;
		`}
`;

export default StyledContainer;
