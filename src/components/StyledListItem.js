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
			display: flex;
			flex-direction: column;
			align-items: center;
		`}
	${({ variant }) =>
		variant === 'playlistVideo' &&
		css`
			background-color: aliceblue;
		`}
`;

export default StyledListItem;
