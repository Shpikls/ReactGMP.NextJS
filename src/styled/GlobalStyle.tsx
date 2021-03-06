import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: Montserrat, sans-serif;
		background: #555555;
		margin: 0;
		width: 100vw;
		overflow-x: hidden;

		&.modal-open {
			overflow: hidden;
		}
	}

	*:focus {
		outline: lightgray dotted 1px;
	}

	button {
		cursor: pointer;
	}
`
