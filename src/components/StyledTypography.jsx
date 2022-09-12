import styled, { css } from 'styled-components';

export default function StyledTypography({ children, variant, component, ...rest }) {
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
	} else if (variant === 'p') {
		return (
			<StyledParagraph as={component} {...rest}>
				{children}
			</StyledParagraph>
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
	${({ decoration }) =>
		decoration === 'borderBottomCreateAccount' &&
		css`
			border-bottom: 4px solid var(--accent-yellow);
			line-height: 30px;
			margin: 65px 0 40px;
			width: 210px;
			text-align: center;
		`}
	${({ position }) =>
		position === 'relative' &&
		css`
			position: relative;
		`}
`;
const StyledH2 = styled.h2`
	font-size: var(--h2);
	${({ decoration }) =>
		decoration === 'channelCard' &&
		css`
			text-align: center;
			font-size: 1.6rem;
			color: #f3f3f3;
			position: absolute;
			top: 35px;
			left: 50%;
			transform: translate(-50%, -50%);
			transform: translate;
		`}
	${({ decoration }) =>
		decoration === 'borderBottom' &&
		css`
			border-bottom: 4px solid var(--accent-yellow);
			line-height: 20px;
			margin: 20px 0;
		`}
		${({ size }) =>
		size === 'medium' &&
		css`
			font-size: var(--text-m);
		`}
		${({ color }) =>
		color === 'white' &&
		css`
			color: var(--white);
		`}
`;
const StyledH3 = styled.h3`
	font-size: var(--h3);
	${({ decoration }) =>
		decoration === 'modal' &&
		css`
			font-size: var(--h3);
			margin: 5px 0 15px;
			font-weight: bold;
		`}
	${({ position }) =>
		position === 'explore' &&
		css`
			margin: 0 0 10px 20px;
		`}
`;

const StyledParagraph = styled.p`
	font-size: var(--text-xs);
	${({ size }) =>
		size === 'small' &&
		css`
			font-size: var(--text-s);
		`}
	${({ size }) =>
		size === 'medium' &&
		css`
			font-size: var(--text-m);
		`}
		${({ margin }) =>
		margin === 'minMargin' &&
		css`
			margin: 5px 0;
		`}
		${({ margin }) =>
		margin === 'bottom' &&
		css`
			margin-bottom: 25px;
		`}
		${({ padding }) =>
		padding === 'minSides' &&
		css`
			padding: 0 5px;
		`}
		${({ align }) =>
		align === 'center' &&
		css`
			text-align: center;
		`}
		${({ bold }) =>
		bold === 'bold' &&
		css`
			font-weight: bold;
		`}
`;
