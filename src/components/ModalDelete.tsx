import {Modal} from "./Modal";
import {DeleteMovie} from "./DeleteMovie";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, selectModal} from "../redux/appSlice";

export const ModalDelete = () => {
	const isOpen = useSelector(selectModal)
	const dispatch = useDispatch()
	const closeModalHandler = () => {
		dispatch(closeModal())
	}

	return (
		<Modal isOpen={isOpen === 'delete'} closeModalHandler={closeModalHandler}>
			<DeleteMovie/>
		</Modal>
	)
}
