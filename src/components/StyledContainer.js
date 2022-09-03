import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	${({ variant }) =>
		variant === 'column' &&
		css`
			flex-direction: column;
		`}
	${({ variant }) =>
		variant === 'buttons' &&
		css`
			gap: 5px;
			margin-top: 10px;
		`}
	${({ variant }) =>
		variant === 'hidden' &&
		css`
			display: none;
		`}
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
		variant === 'scrollPlaylists' &&
		css`
			padding-left: 50px;
			position: relative;
			max-width: 100vw;
			max-height: 250px;
			scroll-snap-type: x mandatory;
			overflow-x: scroll;
			gap: 25px;
			> * {
				min-width: 190px;
				height: 230px;
				overflow: hidden;
				background-color: #fcfdff;
				border: var(--border-accent);
				border-radius: 5px;
				padding: 0;
			}
			> ul > li {
				scroll-snap-align: center;
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
			text-align: center;
			justify-content: center;
			align-items: center;
			position: relative;
			flex-direction: column;
			margin-top: 35px;
			min-width: 300px;
			min-height: 85px;
			> span {
				border: 2px solid transparent;
				border-radius: 5px;
			}
		`}
		${({ variant }) =>
		variant === 'channelCardText' &&
		css`
			flex-direction: column;
		`}
		${({ variant }) =>
		variant === 'channelArrow' &&
		css`
			position: absolute;
			top: 30px;
			right: -20px;
			background: transparent;
			border: none;
			color: #f3f3f3;
		`}
		${({ variant }) =>
		variant === 'playlistVideo' &&
		css`
			width: 140px;
			height: 140px;
			padding: 0;
		`}


		${({ variant }) =>
		variant === 'snapScroll' &&
		css`
			flex-direction: column;
			scroll-snap-type: y mandatory;
			overflow-y: scroll;
			max-height: 100vh;
			& > section {
				scroll-snap-align: center;
			}
		`}
`;

export default StyledContainer;
