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
		variant === 'tags' &&
		css`
			max-width: 100vw;
			padding: 0 10px;
			gap: 10px;
			margin-bottom: 5px;
			display: grid;
			grid-auto-flow: column;
			overflow-x: scroll;
			> a {
				width: auto;
			}
		`}
        ${({ variant }) =>
		variant === 'tagsWrapper' &&
		css`
			display: block;
			margin-bottom: 20px;
		`}

	${({ variant }) =>
		variant === 'scrollVideos' &&
		css`
			position: relative;
			max-width: 100vw;
			max-height: 500px;
			overflow-x: auto;
			gap: 10px;
			> * {
				min-width: 250px;
				height: 200px;
				overflow: hidden;
				background-color: lightgray;
				border: 1px solid grey;
				border-radius: 20px;
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
			z-index: 90;
			width: 110%;
		`}
		${({ variant }) =>
		variant === 'columnSpaceEvenly' &&
		css`
			flex-direction: column;
			justify-content: space-evenly;
		`}
		${({ variant }) =>
		variant === 'margin10TopBottom' &&
		css`
			margin: 10px 0;
		`}
`;

export default StyledContainer;
