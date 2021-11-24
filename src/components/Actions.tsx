import {Action} from "../styled/Action"
import actionButton from '/public/action-button.svg'
import {ActionsDetails} from "../styled/ActionsDetails";
import {ActionCloseButton} from "../styled/ActionCloseButton";
import closeActionButton from '/public/close-action-button.svg'
import {ActionButton} from "../styled/ActionButton";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {openModalDelete, openModalEdit} from "../redux/appSlice";
import React from "react";
import Image from "next/image";

export const Actions: React.FC<{ id: number }> = ({id}) => {
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
				<Image src={actionButton} alt="action button" width={36} height={36}/>
			</Action>
			<ActionsDetails show={detailsShow}>
				<ActionCloseButton onClick={() => setDetailsShow(false)}>
					<Image src={closeActionButton} alt="close-action" width={12} height={12}/>
				</ActionCloseButton>
				<ActionButton onClick={openEditHandler}>Edit</ActionButton>
				<ActionButton onClick={openDeleteHandler}>Delete</ActionButton>
			</ActionsDetails>
		</>

	)
}
