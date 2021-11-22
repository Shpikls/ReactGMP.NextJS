import styled from "styled-components";
import arrowSelect from '../assets/arrow-select.svg'

export const SortSelectWrapper = styled.div`
	position: relative;

	&:after {
		content: url('${arrowSelect.src}');
		display: block;
		position: absolute;
		right: 2px;
		top: 0;
	}
`
