import styled from "styled-components";

export const GenreItem = styled.button<{ active?: boolean }>`
	border: none;
	background: transparent;
	box-sizing: border-box;
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	text-transform: uppercase;
	color: #ffffff;
	padding: 0;
	position: relative;

	&:after {
		display: ${(props) => (props.active ? 'block' : 'none')};
		content: '';
		position: absolute;
		bottom: -23px;
		height: 3px;
		width: 100%;
		background-color: #f65261;
	}
`
