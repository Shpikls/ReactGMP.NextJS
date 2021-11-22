import { CardsWrapper } from "../styled/CardsWrapper";
import { Card } from "./Card";
import {useSelector} from "react-redux";
import {selectMovies} from "../redux/searchResultSlice";

export const Cards = () => {
	const movies = useSelector(selectMovies)

	return (
		<CardsWrapper>
			{movies.map((movie: any) => {
				return (<Card movie={movie} key={movie.id}/>)
			})}
		</CardsWrapper>
	)
}
