import { EditForm } from './EditForm'
import React from 'react'
import styled from 'styled-components'

export const AddMovie = (): JSX.Element => {
	return (
		<>
			<Title>ADD MOVIE</Title>
			<EditForm />
		</>
	)
}

const Title = styled.h3`
	padding: 0;
	margin: 0 0 40px 0;
	font-weight: 300;
	font-size: 40px;
	line-height: 49px;
	text-transform: uppercase;
	color: #ffffff;
`
