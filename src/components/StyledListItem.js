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
			justify-content: center;
		`}
	${({ variant }) =>
		variant === 'playlistVideo' &&
		css`
			display: flex;
			flex-direction: column;
			position: relative;
			justify-content: space-between;
			height: 100%;
			> span {
				border-radius: 3px 3px 0 0;
			}
		`}
		${({ variant }) =>
		variant === 'marginTopBottom5' &&
		css`
			margin: 5px 0;
		`}
`;

export default StyledListItem;
