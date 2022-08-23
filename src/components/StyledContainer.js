import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	${({ variant }) =>
		variant === 'scroll' &&
		css`
			max-width: 100vw;
			max-height: 500px;
			overflow-x: auto;
			border: 2px solid red;
			gap: 10px;
			> * {
				min-width: 300px;
				height: 400px;
				overflow: hidden;
				background-color: lightgray;
				border: 1px solid grey;
				border-radius: 20px;
			}
		`}
`;

export default StyledContainer;
