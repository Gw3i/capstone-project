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
			display: flex;
			flex-direction: column;
			position: relative;
			justify-content: space-between;
			height: 100%;
		`}
`;

export default StyledListItem;
