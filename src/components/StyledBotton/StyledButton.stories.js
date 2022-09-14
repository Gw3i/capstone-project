import StyledButton from './StyledButton';

function Template() {
	return <StyledButton>Button</StyledButton>;
}
export const Default = Template.bind({});

export default {
	title: 'Components/Buttons',
	component: StyledButton,
};

export const Standard = () => <StyledButton variant="standard">Button</StyledButton>;

export const Highlight = () => <StyledButton variant="highlight">Button</StyledButton>;

export const Submit = () => <StyledButton variant="submit">Button</StyledButton>;
