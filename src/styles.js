import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-family: 'Inter', sans-serif;
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
		--accent-purple: #D2B6FF;
		--accent-yellow: #FFF800;
		--h1: 36px;
		--h2: 32px;
		--h3: 24px;
		--h4: 20px;
		--text-m: 16px;
		--text-s: 12px;
	}

	/* inter-regular - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/inter-v12-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inter-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inter-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inter-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inter-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inter-v12-latin-regular.svg#Inter') format('svg'); /* Legacy iOS */
}

/* inter-700 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/inter-v12-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inter-v12-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inter-v12-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inter-v12-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inter-v12-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inter-v12-latin-700.svg#Inter') format('svg'); /* Legacy iOS */
}

/* inter-900 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src: url('/fonts/inter-v12-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/inter-v12-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/inter-v12-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/inter-v12-latin-900.woff') format('woff'), /* Modern Browsers */
       url('/fonts/inter-v12-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/inter-v12-latin-900.svg#Inter') format('svg'); /* Legacy iOS */
}
`;
