import {configureStore} from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'
import {appSlice} from './appSlice'
import {searchResultSlice} from './searchResultSlice'
import {genreListSlice} from "./genreListSlice";
import {movieSlice} from "./movieSlice";

export const makeStore = () => configureStore({
	reducer: {
		[appSlice.name]: appSlice.reducer,
		[searchResultSlice.name]: searchResultSlice.reducer,
		[genreListSlice.name]: genreListSlice.reducer,
		[movieSlice.name]: movieSlice.reducer,
	}
})

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type AppDispatch = ReturnType<RootStore['dispatch']>

export const wrapper = createWrapper<RootStore>(makeStore);
