import styled from "styled-components";
import { Button } from "./Button";

export const ActionButton = styled(Button)`
	font-size: 16px;
	line-height: 20px;
	color: #ffffff;
	opacity: 0.8;
	background-color: transparent;
	padding: 8px 0 8px 24px;
	box-sizing: border-box;
	text-align: left;
	width: 100%;
	display: block;
	border-radius: 0;

	&:hover {
		background-color: #f65261;
	}
`
