type SortByItem = {
	id: number
	value: string
	showValue: string
	default?: true
}

type SortBy = SortByItem[]

export const sortBy: SortBy = [
	{
		id: 0,
		value: '',
		showValue: '-',
		default: true,
	},
	{
		id: 1,
		value: 'release_date',
		showValue: 'Release date',
	},
	{
		id: 2,
		value: 'vote_average',
		showValue: 'Rating',
	},
	{
		id: 3,
		value: 'runtime',
		showValue: 'Runtime',
	},
	{
		id: 4,
		value: 'title',
		showValue: 'Title',
	},
]
