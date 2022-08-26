import styled, { css, keyframes } from 'styled-components';

const move = keyframes`
0% {
    transform: translateY(170%);

  }
  60% {
	transform: translateY(170%);
	opacity: 100%;

  }
  100% {
    transform: translateY(0%);
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
			position: absolute;
			top: -50px;
			z-index: 50;
			background-color: lightgreen;
			color: white;
			animation: ${move} 1.5s ease-in;
			animation-fill-mode: forwards;
		`}
`;
export default StyledSumbitText;
