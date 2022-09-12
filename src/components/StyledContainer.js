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
		`}
		${({ variant }) =>
		variant === 'columnButtons' &&
		css`
			flex-direction: column;
			gap: 5px;
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
		variant === 'tagsWrapper' &&
		css`
			display: block;
			margin-bottom: 20px;
		`}
		${({ variant }) =>
		variant === 'snapScroll' &&
		css`
			flex-direction: column;
			max-height: calc(100vh - 70px);
			overflow-y: scroll;
			scroll-snap-type: y mandatory;
			& > section {
				scroll-snap-align: center;
			}
		`}
	${({ variant }) =>
		variant === 'scrollVideos' &&
		css`
			position: relative;
			max-width: 100vw;
			max-height: 500px;
			overflow-x: auto;
			gap: 10px;
			padding: 0 20px;
			& > * {
				min-width: 250px;
				height: 250px;
				overflow: hidden;
				background-color: lightgray;
				border: 1px solid transparent;
				border-radius: 8px;
			}
		`}
		${({ variant }) =>
		variant === 'scrollPlaylists' &&
		css`
			padding: 0 25vw;
			position: relative;
			max-width: 100vw;
			max-height: 270px;
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
			width: 225px;
			height: 225px;
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
			min-width: 300px;
			min-height: 85px;
			> span {
				border: 2px solid transparent;
				border-radius: 5px;
			}
		`}
		${({ variant }) =>
		variant === 'channelCardWrapper' &&
		css`
			margin: 25px 0 25px;
		`}
		${({ variant }) =>
		variant === 'channelCardWrapperPlaylists' &&
		css`
			text-align: center;
			flex-direction: column;
			margin: 40px 0 25px;
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
			top: calc(50% - 18px);
			right: 0;
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
		variant === 'overlay' &&
		css`
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: rgba(0, 0, 0, 0.3);
			z-index: 100;
			width: 110%;
		`}
		${({ variant }) =>
		variant === 'columnSpaceEvenly' &&
		css`
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
		`}
		${({ variant }) =>
		variant === 'margin10TopBottom' &&
		css`
			margin: 10px 0;
		`}
		${({ variant }) =>
		variant === 'blurContainer' &&
		css`
			display: flex;
			flex-direction: column;
			padding: 10px;
			position: absolute;
			left: 10px;
			right: 10px;
			min-height: 100px;
			bottom: 65px;
			border-radius: 8px;

			background: rgba(163, 163, 163, 0.1);
			backdrop-filter: blur(20px);
			& > h2 {
				margin-top: 10px;
			}
		`}
		${({ variant }) =>
		variant === 'blurContainerExplore' &&
		css`
			display: flex;
			flex-direction: column;
			padding: 10px;
			position: absolute;
			width: 100%;
			height: 80px;
			left: 0px;
			bottom: 0;
			z-index: 100;
			background: rgba(163, 163, 163, 0.1);
			backdrop-filter: blur(20px);
			&:only-child {
				z-index: 150;
			}
		`}
		${({ variant }) =>
		variant === 'logout' &&
		css`
			position: absolute;
			top: 20px;
			right: 20px;
		`}
		${({ variant }) =>
		variant === 'newAccountLink' &&
		css`
			position: absolute;
			top: 20px;
			right: 20px;
		`}
		${({ variant }) =>
		variant === 'blurContainerHeadline' &&
		css`
			padding: 10px 30px;
			position: absolute;
			height: 50px;
			top: 40px;
			z-index: 100;
			border-radius: 8px;
			justify-content: center;
			align-items: center;
			background: rgba(163, 163, 163, 0.1);
			backdrop-filter: blur(20px);
			& > h1 {
				margin: 0;
				color: var(--white);
			}
		`}
`;

export default StyledContainer;
