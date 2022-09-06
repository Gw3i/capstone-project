import styled, { css } from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	if (variant === 'h1') {
		return (
			<StyledH1 as={component} {...rest}>
				{children}
			</StyledH1>
		);
	} else if (variant === 'h2') {
		return (
			<StyledH2 as={component} {...rest}>
				{children}
			</StyledH2>
		);
	} else if (variant === 'h3') {
		return (
			<StyledH3 as={component} {...rest}>
				{children}
			</StyledH3>
		);
	}
}

const StyledH1 = styled.h1`
	font-size: var(--h1);
	${({ decoration }) =>
		decoration === 'borderBottom' &&
		css`
			border-bottom: 4px solid var(--accent-yellow);
			line-height: 20px;
			margin: 65px 0 40px;
			line-height: 25px;
			text-align: center;
		`}
`;
const StyledH2 = styled.h2`
	font-size: var(--h2);
`;
const StyledH3 = styled.h3`
	font-size: var(--h3);
`;
