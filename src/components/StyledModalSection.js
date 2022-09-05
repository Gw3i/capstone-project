import styled, { css } from 'styled-components';

const StyledModalSection = styled.section`
	${({ variant }) =>
		variant === 'delete' &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 35px;
			right: 0;
			width: 220px;
			height: 200px;
			padding: 10px;
			border: 2px solid black;
			border-radius: 8px;
			background-color: #fcfdff;
			text-align: center;
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
			border-radius: 8px;
			background-color: #fcfdff;
			left: calc(50% - 110px);
			z-index: 100;
		`}
`;

export default StyledModalSection;
