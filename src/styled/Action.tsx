import styled from "styled-components";

export const Action = styled.button<{show: boolean}>`
	top: 16px;
	right: 16px;
	position: absolute;
	width: 36px;
	height: 36px;
	border: none;
	padding: 0;
	background-color: transparent;
	display: none;

	&:hover,
	&:focus {
		display: ${({ show }) => (show ? 'block' : 'none')};
	}
`
