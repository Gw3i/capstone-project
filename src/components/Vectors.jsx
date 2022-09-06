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
	}
}

const StyledVectorContainer = styled.div`
	position: absolute;
	z-index: -1000;
	top: 480px;
	right: -20px;
	width: 100vw;
	height: 400px;
	overflow: hidden;
	& > svg {
		right: -240px;
	}

	${({ variant }) =>
		variant === 'bigPurpleLogin' &&
		css`
			top: 389px;
			right: 0px;
			height: 250px;
			& > svg {
				right: -260px;
				transform: rotate(-3deg);
			}
		`}
	${({ variant }) =>
		variant === 'bigPurpleCreateAccount' &&
		css`
			top: 389px;
			right: 0px;
			height: 250px;
			transform: scaleX(-1);
			& > svg {
				right: -260px;
				transform: rotate(-3deg);
			}
		`}
		${({ variant }) =>
		variant === 'bigPurpleExplore' &&
		css`
			top: 400px;
			right: 0px;
			height: 500px;
			& > svg {
				right: -260px;
				transform: rotate(-10deg);
			}
		`}
`;
