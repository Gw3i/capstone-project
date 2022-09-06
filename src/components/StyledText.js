import styled, { css } from 'styled-components';

const StyledText = styled.p`
	${({ variant }) =>
		variant === 'playlist' &&
		css`
			margin: 10px 0;
			font-size: 1.1rem;
			text-align: center;
		`}
	${({ variant }) =>
		variant === 'videoCard' &&
		css`
			font-size: var(--text-xs);
			padding: 5px;
			margin: 0;
		`}
		${({ variant }) =>
		variant === 'minMargin' &&
		css`
			margin: 5px 0;
		`}
		${({ variant }) =>
		variant === 'h3' &&
		css`
			font-size: var(--h3);
			margin: 5px 0 15px;
			font-weight: bold;
		`}
`;

export default StyledText;
