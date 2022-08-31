import styled, { css, keyframes } from 'styled-components';

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
	padding: 10px;
	border: 2px solid lightgreen;
	border-radius: 5px;
	color: lightgreen;
	${({ variant }) =>
		variant === 'editConfirm' &&
		css`
			position: fixed;
			position: absolute;
			top: -10vh;
			z-index: 50;
			background-color: lightgreen;
			color: white;
			animation: ${move} 1.5s ease-in;
			animation-fill-mode: forwards;
		`}
`;
export default StyledSumbitText;
