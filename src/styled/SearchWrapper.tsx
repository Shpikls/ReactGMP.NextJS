import styled from 'styled-components';

export const SearchWrapper = styled.section<{background: StaticImageData}>`
	background: url('${(props) => props.background.src}');
	width: 1200px;
	margin: 0 auto 10px;
	padding: 20px 56px;
	box-sizing: border-box;
`
