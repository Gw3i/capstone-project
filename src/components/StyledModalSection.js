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
			top: 25%;
			text-align: center;
			width: 300px;
			height: 200px;
			padding: 10px;
			border-radius: 20px;
			background-color: #fcfdff;
			margin: 0 auto;
		`}
`;

export default StyledModalSection;
