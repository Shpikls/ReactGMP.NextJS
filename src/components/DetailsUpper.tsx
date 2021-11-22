import {DetailsUpperWrapper} from "./DetailsUpperWrapper";
import {Logo} from "./Logo";
import {DetailsUpperButton} from "./DetailsUpperButton";
import searchButton from '../assets/search-button.svg'
import {useRouter} from "next/dist/client/router";

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
					<img style={{float: "left"}} src={searchButton.src} alt="back to search"/>
				</DetailsUpperButton>
			</DetailsUpperWrapper>
		</>
	)
}
