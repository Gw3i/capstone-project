import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		font-size: 1rem;
	}
	h2, h3 {
		margin: 5px 0;
	}

	:root {
		--border-accent: 2px solid #D2B6FF;
		--dark: #09070B;
		--white: #FCFDFF;
	}
`;
