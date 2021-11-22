import {AddButton} from '../styled/AddButton'
import {Flex} from '../styled/Flex'
import {Logo} from './Logo'
import {useDispatch} from "react-redux";
import {openModalAdd} from "../redux/appSlice";

export const SearchUpper = (): JSX.Element => {
	const dispatch = useDispatch()

	const addButtonHandler = () => {
		dispatch(openModalAdd())
	}

	return (
		<Flex jContent="space-between">
			<Logo/>
			<AddButton onClick={addButtonHandler}>+ add movie</AddButton>
		</Flex>
	)
}
