type TitleSearch = {
	searchBy: 'title'
	search: string
}

type GenresSearch = {
	filter: string // один жанр
}

type SortSearch = {
	sortBy: string // одно из полей
	sortOrder: 'desc'
}

type MovieSearch = {
	movie: number
}

export type QueryParams = Partial<GenresSearch & SortSearch & TitleSearch & MovieSearch>
