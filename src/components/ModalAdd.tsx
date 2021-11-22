import {Modal} from "./Modal";
import {AddMovie} from "./AddMovie";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, selectModal} from "../redux/appSlice";

export const ModalAdd = () => {
	const isOpen = useSelector(selectModal)
	const dispatch = useDispatch()
	const closeModalHandler = () => {
		dispatch(closeModal())
	}

	return (
		<Modal isOpen={isOpen === 'add'} closeModalHandler={closeModalHandler}>
			<AddMovie/>
		</Modal>
	)
}
