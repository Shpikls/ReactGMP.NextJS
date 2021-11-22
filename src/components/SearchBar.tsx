import {Flex} from "../styled/Flex";
import {SearchUpperTitle} from "../styled/SearchUpperTitle";
import {SearchUpperWrapper} from "../styled/SearchUpperWrapper";
import {SearchUpperButton} from "../styled/SearchUpperButton";
import {SearchUpperInput} from "../styled/SearchUpperInput";
import {useRouter} from "next/dist/client/router";
import {SyntheticEvent, useState} from "react";

export const SearchBar = (): JSX.Element => {
	const router = useRouter()
	const {query} = router
	const initialSearch: string | undefined = Array.isArray(query.search) ? query.search[0] : query.search
	const [search, setSearch] = useState<string>(initialSearch || '')
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		if (search) {
			router.push({
				pathname: '/search',
				query: {
					...router.query,
					searchBy: 'title',
					search: search,
				}
			})
		} else {
			delete router.query.search
			delete router.query.searchBy
			router.push({
				pathname: '/search',
				query: {
					...router.query,
				}
			})
		}

	}

	return (
		<SearchUpperWrapper>
			<SearchUpperTitle>FIND YOUR MOViE</SearchUpperTitle>
			<Flex jContent="space-between">
				<SearchUpperInput
					placeholder="What do you want to watch?"
					value={search}
					onKeyDown={(e) => (e.key === "Enter" && handleSubmit(e))}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<SearchUpperButton onClick={handleSubmit}>Search</SearchUpperButton>
			</Flex>
		</SearchUpperWrapper>
	)
}
