import styled, { css } from 'styled-components';

const StyledText = styled.p`
	${({ variant }) =>
		variant === 'playlist' &&
		css`
			margin: 10px 0;
			font-size: 1.1rem;
			text-align: center;
			max-width: ;
		`}
	${({ variant }) =>
		variant === 'videoCard' &&
		css`
			font-size: 1rem;
			padding: 5px;
			margin-top: 0;
		`}
		${({ variant }) =>
		variant === 'minMargin' &&
		css`
			margin: 5px 0;
		`}
`;

export default StyledText;
