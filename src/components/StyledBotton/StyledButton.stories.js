import StyledButton from './StyledButton';

export default {
	title: 'Components/Buttons',
	component: StyledButton,
};

export const Default = () => <StyledButton variant="standard">Button</StyledButton>;

export const Highlight = () => <StyledButton variant="highlight">Button</StyledButton>;

export const Submit = () => <StyledButton variant="submit">Button</StyledButton>;
