import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {HYDRATE} from "next-redux-wrapper";

export type GenreListState = string[]

const initialState: GenreListState = [] as string[]

export const genreListSlice = createSlice({
	name: 'genreList',
	initialState,
	reducers: {
		setGenreList: (state, action: PayloadAction<string[]>) => {
			return action.payload
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return action.payload.genreList;
		}
	}
})

export const {setGenreList} = genreListSlice.actions

export const selectGenreList = (state: RootState) => state.genreList
