import { DetailsInfoTitleWrapper } from "../styled/DetailsInfoTitleWrapper";
import { DetailsInfoTitle } from "../styled/DetailsInfoTitle";
import { DetailsInfoRating } from "../styled/DetailsInfoRating";
import { DetailsInfoGenre } from "../styled/DetailsInfoGenre";
import { DetailsInfoSecondWrapper } from "../styled/DetailsInfoSecondWrapper";
import { DetailsInfoYear } from "../styled/DetailsInfoYear";
import { DetailsInfoDurations } from "../styled/DetailsInfoDurations";
import { DetailsInfoDescription } from "../styled/DetailsInfoDescription";
import {useSelector} from "react-redux";
import {selectMovie} from "../redux/movieSlice";

export const DetailsInfo = () => {
	const movie = useSelector(selectMovie)

	return (
		<div>
			<DetailsInfoTitleWrapper>
				<DetailsInfoTitle>{movie.title}</DetailsInfoTitle>
				<DetailsInfoRating>{movie.vote_average}</DetailsInfoRating>
			</DetailsInfoTitleWrapper>
			<DetailsInfoGenre>{movie.genres && movie.genres.toString()}</DetailsInfoGenre>
			<DetailsInfoSecondWrapper>
				<DetailsInfoYear>{movie.release_date}</DetailsInfoYear>
				<DetailsInfoDurations>{movie.runtime} m</DetailsInfoDurations>
			</DetailsInfoSecondWrapper>
			<DetailsInfoDescription>{movie.overview}</DetailsInfoDescription>
		</div>
	)
}
