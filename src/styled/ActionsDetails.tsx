import styled from "styled-components";

export const ActionsDetails = styled.div<{show: boolean}>`
	background: rgb(35, 35, 35);
	border-radius: 4px;
	position: absolute;
	top: 16px;
	right: 16px;
	width: 190px;
	padding: 24px 0 12px;
	cursor: default;
	display: ${({ show }) => (show ? 'block' : 'none')};
`
