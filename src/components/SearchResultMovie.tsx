import {Found} from "../styled/Found"
import {Cards} from "./Cards";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

export const SearchResultMovie = () => {
	const totalFound = useSelector((state: RootState) => state.searchResult.totalAmount)

	return (
		<>
			<Found>{totalFound} movies found</Found>
			<Cards/>
		</>
	)
}
