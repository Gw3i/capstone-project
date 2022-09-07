import styled from 'styled-components';

const StyledModalSection = styled.section`
	display: flex;
	position: fixed;
	z-index: 110;
	top: 25%;
	left: calc(50% - 110px);
	flex-direction: column;
	align-items: center;
	width: 220px;
	padding: 10px 30px;
	border: 2px solid black;
	border-radius: 8px;
	background-color: var(--white);
	text-align: center;
`;

export default StyledModalSection;
