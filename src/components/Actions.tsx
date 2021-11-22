import {Action} from "../styled/Action"
import actionButton from '../assets/action-button.svg'
import {ActionsDetails} from "../styled/ActionsDetails";
import {ActionCloseButton} from "../styled/ActionCloseButton";
import closeActionButton from '../assets/close-action-button.svg'
import {ActionButton} from "../styled/ActionButton";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {openModalDelete, openModalEdit} from "../redux/appSlice";
import React from "react";

export const Actions: React.FC<{id: number}> = ({id}) => {
	const [detailsShow, setDetailsShow] = useState(false)
	const dispatch = useDispatch()
	const openEditHandler = () => {
		dispatch(openModalEdit(id))
	}
	const openDeleteHandler = () => {
		dispatch(openModalDelete(id))
	}

	return (
		<>
			<Action show={!detailsShow} onClick={() => setDetailsShow(true)}>
				<img src={actionButton.src} alt="action button"/>
			</Action>
			<ActionsDetails show={detailsShow}>
				<ActionCloseButton onClick={() => setDetailsShow(false)}>
					<img src={closeActionButton.src} alt="close-action"/>
				</ActionCloseButton>
				<ActionButton onClick={openEditHandler}>Edit</ActionButton>
				<ActionButton onClick={openDeleteHandler}>Delete</ActionButton>
			</ActionsDetails>
		</>

	)
}
