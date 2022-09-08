import styled, { keyframes } from 'styled-components';

const move = keyframes`
0% {
    transform: translateY(20vh);

  }
  60% {
	transform: translateY(20vh);
	opacity: 100%;

  }
  100% {
    transform: translateY(1vh);
	opacity: 0%;
  }
`;

const StyledSumbitText = styled.p`
	position: fixed;
	z-index: 50;
	top: -10vh;
	padding: 10px;
	animation: ${move} 1.5s ease-in;
	border-radius: 6px;
	background-color: var(--accent-purple);
	color: var(--dark);
	animation-fill-mode: forwards;
`;
export default StyledSumbitText;
