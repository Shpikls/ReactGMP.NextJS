import {Movie} from "./Movie";

export type MoviesResponse = {
	data: Movie[]
	total: number
	offset:	number
	limit:	number
	totalGenres: string[]
	totalAmount: number
}
