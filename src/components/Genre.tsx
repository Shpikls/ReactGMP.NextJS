import {GenreItem} from "../styled/GenreItem";
import {GenreWrapper} from "../styled/GenreWrapper";
import {useSelector} from "react-redux";
import {selectGenreList} from "../redux/genreListSlice";
import {useRouter} from "next/dist/client/router";

export const Genre = () => {
	const genresList = useSelector(selectGenreList)
	const router = useRouter()
	const filter = router.query.filter

	return (
		<GenreWrapper>
			<GenreItem
				active={!filter}
				onClick={() => {
					delete router.query.filter
					router.push({
						pathname: 'search',
						query: {
							...router.query
						}
					})
				}}
			>All</GenreItem>
			{genresList
				.filter((item, index) => index < 6)
				.map((genre, index) =>
					<GenreItem
						active={Boolean(filter && !Array.isArray(filter) && filter.toLowerCase() === genre.toLowerCase())}
						onClick={() => {
							router.push({
								pathname: 'search',
								query: {
									...router.query,
									filter: genre
								}
							})
						}}
						key={index}
					>{genre}</GenreItem>)
			}
		</GenreWrapper>
	)
}
