import styled, { css } from 'styled-components';

const StyledModalSection = styled.section`
	${({ variant }) =>
		variant === 'delete' &&
		css`
			position: absolute;
			top: 50px;
			right: 0;
			width: 300px;
			height: 200px;
			padding: 10px;
			border-radius: 20px;
			background-color: #fcfdff;
		`}
	${({ variant }) =>
		variant === 'addVideo' &&
		css`
			position: fixed;
			display: flex;
			flex-direction: column;
			align-items: center;
			top: 25%;
			text-align: center;
			width: 220px;
			padding: 10px 30px;
			border: 2px solid black;
			border-radius: 10px;
			background-color: #fcfdff;
			left: calc(50% - 110px);
			z-index: 100;
		`}
`;

export default StyledModalSection;
