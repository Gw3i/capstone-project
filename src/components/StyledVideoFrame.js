import styled, { css } from 'styled-components';

const StyledVideoFrame = styled.iframe`
	width: 100vw;
	height: 100vh;
	${({ size }) =>
		size === 'explore' &&
		css`
			width: 300px;
			height: 400px;
		`}

	@media screen and (min-width: 520px) {
		max-width: 500px;
		max-height: 800px;
	}
`;

export default StyledVideoFrame;
