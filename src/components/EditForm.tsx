import { GenreCheckboxLayout } from './GenreCheckboxLayout'
import { Flex } from '../styled/Flex'
import {Formik, FormikErrors} from 'formik'
import Joi from 'joi'
import React from 'react'
import styled from 'styled-components'
import { Error, FieldForm, Label } from './FieldForm'
import {useSelector} from "react-redux";
import {selectAppID, selectModal} from "../redux/appSlice";
import {createSelector} from "reselect";
import {selectMovies} from "../redux/searchResultSlice";
import {BASE_URL} from "../staticData/api";
import {Movie, MovieAdd} from "../types/Movie";
import {useRouter} from "next/dist/client/router";

const MovieModel = Joi.object({
	title: Joi.string().required(),
	vote_average: Joi.number().min(0).max(100),
	release_date: Joi.string().isoDate(),
	poster_path: Joi.string().uri().required(),
	overview: Joi.string().required(),
	genres: Joi.array().items(Joi.string().required()),
	runtime: Joi.number().integer().min(1).required(),
}).prefs({ convert: false, abortEarly: false })

type FormValues = {
	[key in 'title' | 'poster_path' | 'overview' | 'runtime' | 'vote_average' | 'release_date']: string
} & {
	[key in 'genres']: string[]
}

const selectMovieByID = createSelector(
	selectAppID,
	selectMovies,
	(id, data) => data.filter((movie) => movie.id === id)[0]
)

export const EditForm = () => {
	const router = useRouter()
	const modal = useSelector(selectModal)
	const id = useSelector(selectAppID)
	const initialValues: FormValues = {
		title: '',
		poster_path: '',
		overview: '',
		runtime: '',
		genres: [] as string[],
		vote_average: '',
		release_date: '',
	}

	if (modal === 'edit') {
		const movie = useSelector(selectMovieByID)
		for (const key in movie) {
			if (key === 'genres') {
				initialValues[key] = movie[key]
			} else if (
				key === 'title' ||
				key === 'poster_path' ||
				key === 'overview' ||
				key === 'runtime' ||
				key === 'vote_average' ||
				key === 'release_date'
			) {
				if (movie.hasOwnProperty(key) && movie[key]) {
					initialValues[key] = String(movie[key])
				}
			}
		}
	}

	const onSubmit = async (values: FormValues) => {
		if (modal === 'edit') {
			const res = await fetch(`${BASE_URL}/movies`, {
				method: "PUT",
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(valuesToQuery(values, true))
			})

			if (res.status === 200) {
				router.reload()
			}
		}

		if (modal === 'add') {
			const res = await fetch(`${BASE_URL}/movies`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(valuesToQuery(values, false))
			})

			if (res.status === 201) {
				router.reload()
			}
		}
	}

	const validate = (values: FormValues) => {
		const errors: FormikErrors<{[key in string]: string}> = {}
		const mappedValues = valuesToQuery(values, false)
		const { error } = MovieModel.validate(mappedValues)
		error?.details.forEach((item) => {
			if (item) {
				item.path.forEach((path) => {
					errors[path] = item.message
				})
			}
		})

		return errors
	}

	const valuesToQuery = (values: FormValues, needID: boolean): Movie | MovieAdd => {
		if (needID) {
			return {
				...values,
				id: Number(id),
				runtime: Number(values.runtime),
				vote_average: values.vote_average ? Number(values.vote_average) : undefined,
				release_date: values.release_date ? values.release_date : undefined,
			}
		}

		return {
			...values,
			runtime: Number(values.runtime),
			vote_average: values.vote_average ? Number(values.vote_average) : undefined,
			release_date: values.release_date ? values.release_date : undefined,
		}
	}

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
			{({ handleSubmit, handleReset, handleChange, handleBlur, values, errors }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Flex jContent="space-between">
							<FieldForm id="title" title="Title" placeholder="Movie Name" />
							<FieldForm id="release_date" title="RELEASE DATE" placeholder="Select Date" />
						</Flex>
						<Flex jContent="space-between">
							<FieldForm id="poster_path" title="movie url" placeholder="https://" />
							<FieldForm id="vote_average" title="RELEASE DATE" placeholder="7.8" />
						</Flex>
						<Flex jContent="space-between">
							<GenreCheckboxLayout />
							<FieldForm id="runtime" title="RUNTIME" placeholder="minutes" />
						</Flex>
						<div style={{ position: 'relative' }}>
							<Flex fDirection="column" style={{ marginBottom: '60px' }}>
								<Label htmlFor="overview">OVERVIEW</Label>
								<TextArea
									placeholder="Movie description"
									id="overview"
									value={values.overview}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.overview && <Error>{errors.overview}</Error>}
							</Flex>
						</div>
						<Flex jContent="flex-end">
							<Button type="reset" onClick={handleReset}>
								reset
							</Button>
							<SubmitButton type="submit">submit</SubmitButton>
						</Flex>
					</form>
				)
			}}
		</Formik>
	)
}

const TextArea = styled.textarea.attrs({ rows: 7 })`
	resize: none;
	background-color: rgba(50, 50, 50, 0.8);
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	box-sizing: border-box;
	padding: 18px;
`

const Button = styled.button`
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	background-color: transparent;
	box-sizing: border-box;
	color: #f65261;
	border: 1px solid #f65261;
	border-radius: 5px;
	padding: 0;
	width: 180px;
	height: 56px;
	text-transform: uppercase;

	& + & {
		margin-left: 16px;
	}
`

const SubmitButton = styled(Button)`
	background-color: #f65261;
	color: white;
`
