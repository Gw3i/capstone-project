import styled, { css } from 'styled-components';

import Vector from './Vector';

export default function Vectors({ variant }) {
	if (variant === 'bigPurple') {
		return (
			<StyledVectorContainer variant="bigPurple">
				<Vector variant="bigPurple" size="777px" color="var(--accent-purple)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'bigPurpleLogin') {
		return (
			<StyledVectorContainer variant="bigPurpleLogin">
				<Vector variant="bigPurple" size="777px" color="var(--accent-purple)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'bigPurpleCreateAccount') {
		return (
			<StyledVectorContainer variant="bigPurpleCreateAccount">
				<Vector variant="bigPurple" size="777px" color="var(--accent-purple)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'bigPurpleExplore') {
		return (
			<StyledVectorContainer variant="bigPurpleExplore">
				<Vector variant="bigPurple" size="777px" color="var(--accent-purple)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'smallBlob') {
		return (
			<StyledVectorContainer variant="smallBlob">
				<Vector variant="smallBlob" size="900" color="var(--accent-yellow)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'smallBlobCreateAccount') {
		return (
			<StyledVectorContainer variant="smallBlobCreateAccount">
				<Vector variant="smallBlob" size="900" color="var(--accent-yellow)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'smallBlobAdd') {
		return (
			<StyledVectorContainer variant="smallBlobAdd">
				<Vector variant="smallBlob" size="900" color="var(--accent-yellow)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'bigBlobExplore') {
		return (
			<StyledVectorContainer variant="bigBlobExplore">
				<Vector variant="bigBlob" size="700" color="var(--accent-yellow)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'bigBlobCreateAccount') {
		return (
			<StyledVectorContainer variant="bigBlobCreateAccount">
				<Vector variant="bigBlob" size="700" color="var(--accent-yellow)" />
			</StyledVectorContainer>
		);
	} else if (variant === 'bigBlobAdd') {
		return (
			<StyledVectorContainer variant="bigBlobAdd">
				<Vector variant="bigBlob" size="1000" color="var(--accent-yellow)" />
			</StyledVectorContainer>
		);
	}
}

const StyledVectorContainer = styled.div`
	position: absolute;
	z-index: -1000;
	width: 100vw;
	overflow: hidden;
	${({ variant }) =>
		variant === 'bigPurple' &&
		css`
			z-index: -1000;
			top: 480px;
			right: -20px;
			width: 100vw;
			height: 400px;
			overflow: hidden;
			& > svg {
				right: -240px;
			}
		`}
	${({ variant }) =>
		variant === 'bigPurpleLogin' &&
		css`
			height: 100%;
			right: 0;
			bottom: -60%;
			& > svg {
				right: -70%;
				transform: rotate(-3deg);
			}
			@media screen and (min-width: 376px) {
				height: 59%;
				width: 100vw;
				right: 0;
				bottom: -72%;
				& > svg {
					right: 15%;
					transform: rotate(-3deg);
					width: 200%;
				}
			}
		`}
	${({ variant }) =>
		variant === 'bigPurpleCreateAccount' &&
		css`
			top: 94%;
			right: 0;
			height: 60%;
			transform: scaleX(-1);
			& > svg {
				right: -70%;
				transform: rotate(-3deg);
			}
		`}
		${({ variant }) =>
		variant === 'bigPurpleExplore' &&
		css`
			top: 18%;
			right: 0;
			height: 100%;
			& > svg {
				right: -70%;
				transform: rotate(0deg);
			}
		`}
		${({ variant }) =>
		variant === 'smallBlob' &&
		css`
			top: 0;
			right: 0px;
			height: 150px;
			& > svg {
				right: -510px;
				top: -120px;
				transform: rotate(-10deg);
			}
		`}
		${({ variant }) =>
		variant === 'smallBlobCreateAccount' &&
		css`
			top: 0;
			right: 0px;
			height: 100px;
			width: 400px;
			& > svg {
				right: -120px;
				top: 200px;
				transform: rotate(65deg);
			}
		`}
		${({ variant }) =>
		variant === 'smallBlobAdd' &&
		css`
			top: 0;
			right: 0px;
			height: 100px;
			width: 400px;
			& > svg {
				right: 100px;
				top: 130px;
				transform: rotate(100deg);
			}
		`}
		${({ variant }) =>
		variant === 'bigBlobExplore' &&
		css`
			top: 0;
			right: 0;
			height: 700px;
			width: 700px;

			& > svg {
				right: -590px;
				top: 50px;
			}
		`}
		${({ variant }) =>
		variant === 'bigBlobCreateAccount' &&
		css`
			top: 0;
			right: 0;
			height: 700px;
			width: 700px;

			& > svg {
				right: -115px;
				top: -20px;
				transform: rotate(160deg);
			}
		`}
		${({ variant }) =>
		variant === 'bigBlobAdd' &&
		css`
			top: 0;
			right: 0;
			height: 700px;
			width: 700px;

			& > svg {
				right: -160px;
				top: 40px;
				transform: rotate(160deg);
			}
		`}
`;
