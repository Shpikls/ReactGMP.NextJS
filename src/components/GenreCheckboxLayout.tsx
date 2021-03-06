import { FormValues } from './EditForm'
import { GenreInput } from './GenreInput'
import { useFormikContext } from 'formik'
import React from 'react'
import { Error, FieldColumn, Label } from './FieldForm'

export const GenreCheckboxLayout = (): JSX.Element => {
	const { errors } = useFormikContext<FormValues>()

	return (
		<FieldColumn fDirection="column">
			<Label htmlFor="genres-btn">genre</Label>
			<GenreInput />
			{errors.genres && <Error>{errors.genres}</Error>}
		</FieldColumn>
	)
}
