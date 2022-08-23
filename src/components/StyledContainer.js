import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	${({ variant }) =>
		variant === 'explore' &&
		css`
			overflow-x: auto;
			overflow-y: hidden;
			max-width: 100vw;
			height: 300px;
			border: 4px solid red;
			> * {
				width: 200px;
				height: 300px;
			}
		`}
`;

export default StyledContainer;
