import {DetailsUpperWrapper} from "./DetailsUpperWrapper";
import {Logo} from "./Logo";
import {DetailsUpperButton} from "./DetailsUpperButton";
import searchButton from '../../public/search-button.svg'
import {useRouter} from "next/dist/client/router";
import Image from 'next/image'

export const DetailsUpper = () => {
	const router = useRouter()
	const handleClick = () => {
		delete router.query.movie
		router.push({
			pathname: '/search',
			query: {
				...router.query
			}
		})
	}

	return (
		<>
			<DetailsUpperWrapper>
				<Logo/>
				<DetailsUpperButton onClick={handleClick}>
					<Image src={searchButton} alt="back to search"/>
				</DetailsUpperButton>
			</DetailsUpperWrapper>
		</>
	)
}
