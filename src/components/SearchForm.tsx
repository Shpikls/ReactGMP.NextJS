import { SearchWrapper } from '../styled/SearchWrapper'
import { SearchUpper } from './SearchUpper'
import backgroundImage from '../../public/header-background.png'
import { SearchBar } from './SearchBar'

export const SearchForm = (): JSX.Element => {
	return (
		<SearchWrapper background={backgroundImage}>
			<SearchUpper />
		 	<SearchBar />
		</SearchWrapper>
	)
}
