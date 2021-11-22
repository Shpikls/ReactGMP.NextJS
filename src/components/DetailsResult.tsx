import { DetailsResultWrapper } from "../styled/DetailsResultWrapper"
import { DetailsResultPoster } from "../styled/DetailsResultPoster";
import { DetailsInfo } from "./DetailsInfo";
import {useSelector} from "react-redux";
import {selectMovie} from "../redux/movieSlice";

export const DetailsResult = () => {
	const movie = useSelector(selectMovie)

	return (
		<DetailsResultWrapper>
			<DetailsResultPoster src={movie.poster_path} alt={`Poster movie ${movie.title}`}/>
			<DetailsInfo />
		</DetailsResultWrapper>
	)
}
