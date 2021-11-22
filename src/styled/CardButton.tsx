import styled from "styled-components";
import { Action } from "./Action";

export const CardButton = styled.a`
	display: flex;
	background: transparent;
	border: none;
	padding: 0;

	&:focus + ${Action}, &:hover + ${Action} {
		display: flex;
	}
`
