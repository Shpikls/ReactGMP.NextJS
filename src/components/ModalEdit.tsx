import {Modal} from "./Modal";
import {EditMovie} from "./EditMovie";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, selectModal} from "../redux/appSlice";

export const ModalEdit = () => {
	const isOpen = useSelector(selectModal)
	const dispatch = useDispatch()
	const closeModalHandler = () => {
		dispatch(closeModal())
	}

	return (
		<Modal isOpen={isOpen === 'edit'} closeModalHandler={closeModalHandler}>
			<EditMovie/>
		</Modal>
	)
}
