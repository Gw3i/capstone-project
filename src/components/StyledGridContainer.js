import styled, { css } from 'styled-components';

const StyledGridContainer = styled.div`
	display: grid;
	gap: 5px;
	${({ variant }) =>
		variant === '2Columns' &&
		css`
			grid-template-columns: 1fr 1fr;
		`};
`;

export default StyledGridContainer;
