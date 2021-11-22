import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {HYDRATE} from "next-redux-wrapper";
import {Movie} from "../types/Movie";

const initialState: Movie = {} as Movie

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		updateMovie: (state, action: PayloadAction<Movie>) => {
			return action.payload
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return action.payload.movie
		}
	}
})

export const {updateMovie} = movieSlice.actions

export const selectMovie = (state: RootState) => state.movie
