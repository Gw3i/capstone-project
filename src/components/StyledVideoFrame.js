import styled from 'styled-components';

const StyledVideoFrame = styled.iframe`
	width: 100vw;
	height: 100vh;

	@media screen and (min-width: 520px) {
		max-width: 500px;
		max-height: 800px;
	}
`;

export default StyledVideoFrame;
