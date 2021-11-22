import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';
import {RootState} from "./store";
import {MoviesResponse} from "../types/MoviesResponse";

const initialState: MoviesResponse = {} as MoviesResponse

export const searchResultSlice = createSlice({
	name: 'searchResult',
	initialState,
	reducers: {
		updateSearchResult: (state, action: PayloadAction<MoviesResponse>) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.searchResult,
			};
		}
	}
})

export const {updateSearchResult} = searchResultSlice.actions

export const selectMovies = (state: RootState) => state.searchResult.data
