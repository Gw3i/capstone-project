import styled, { css } from 'styled-components';

const StyledListItem = styled.li`
	list-style: none;
	${({ variant }) =>
		variant === 'nav' &&
		css`
			width: 80px;
		`}
	${({ variant }) =>
		variant === 'playlist' &&
		css`
			background-color: aliceblue;
		`}
`;

export default StyledListItem;
