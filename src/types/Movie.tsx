export interface Movie {
	id: number
	title: string
	poster_path: string
	genres: string[]
	overview: string
	runtime: number
	release_date?: string
	vote_average?: number
}

export interface MovieAdd {
	title: string
	poster_path: string
	genres: string[]
	overview: string
	runtime: number
	release_date?: string
	vote_average?: number
}
