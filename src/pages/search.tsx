import {useRouter} from "next/dist/client/router";
import React from "react";
import {Details} from "../components/Details";
import {Footer} from "../components/Footer";
import {SearchForm} from "../components/SearchForm";
import {SearchResult} from "../components/SearchResult";
import {GlobalStyle} from "../styled/GlobalStyle";
import {ModalAdd} from "../components/ModalAdd";
import {ModalEdit} from "../components/ModalEdit";
import {ModalDelete} from "../components/ModalDelete";
import {wrapper} from "../redux/store";
import {updateSearchResult} from "../redux/searchResultSlice";
import {setGenreList} from "../redux/genreListSlice";
import {BASE_URL} from "../staticData/api";
import {MoviesResponse} from "../types/MoviesResponse";
import {Movie} from "../types/Movie";
import {updateMovie} from "../redux/movieSlice";

const Search = () => {
	const router = useRouter()

	return (
		<>
			<GlobalStyle/>
			<ModalAdd/>
			<ModalEdit/>
			<ModalDelete/>
			{router.query.movie ? <Details/> : <SearchForm/>}
			<SearchResult/>
			<Footer/>
		</>
	)
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (query) => {
	const searchParam = query.resolvedUrl.replace('/search', '')
	const res = await fetch(`${BASE_URL}/movies${searchParam}`, {
		method: "GET"
	})
	const movies: MoviesResponse = await res.json()

	store.dispatch(updateSearchResult(movies))
	store.dispatch(setGenreList(movies.totalGenres))

	if (query.query.movie) {
		const movieID = Array.isArray(query.query.movie) ? query.query.movie[0] : query.query.movie
		const res = await fetch(`${BASE_URL}/movies/${movieID}`, {
			method: "GET"
		})
		const movies: Movie = await res.json()

		store.dispatch(updateMovie(movies))
	}

	return {props: {}}
})

export default Search
