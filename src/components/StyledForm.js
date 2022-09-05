import styled, { css } from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 250px;
	gap: 20px;
	${({ variant }) =>
		variant === 'addVideo' &&
		css`
			align-items: center;
		`}
`;

export default StyledForm;
