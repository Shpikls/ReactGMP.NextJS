import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export interface AppState {
	modal?: 'add' | 'edit' | 'delete'
	id?: number
}

const initialState: AppState = {}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		openModalAdd: (state) => {
			state.modal = 'add'
		},
		openModalEdit: (state, action: PayloadAction<number>) => {
			state.modal = 'edit'
			state.id = action.payload
		},
		openModalDelete: (state,action: PayloadAction<number>) => {
			state.modal = 'delete'
			state.id = action.payload
		},
		closeModal: (state) => {
			state.modal = undefined
			state.id = undefined
		},
	}
})

export const { openModalAdd, openModalEdit, openModalDelete, closeModal } = appSlice.actions

export const selectModal = (state: RootState) => state.app.modal
export const selectAppID = (state: RootState) => state.app.id
