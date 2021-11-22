import {DescriptionWrapper} from "../styled/DescriptionWrapper";
import {Year} from "../styled/Year";
import {DescriptionTitle} from "../styled/DescriptionTitle";
import {DescriptionGenres} from "../styled/DescriptionGenres";
import React from "react";
import {Movie} from "../types/Movie";

export const Description: React.FC<{ movie: Movie }> = ({movie}) => {
	return (
		<DescriptionWrapper>
			<DescriptionTitle>{movie.title}</DescriptionTitle>
			<DescriptionGenres>{movie.genres.toString()}</DescriptionGenres>
			<Year>{movie.release_date && movie.release_date?.length > 4 ? movie.release_date?.slice(0, 4) : movie.release_date}</Year>
		</DescriptionWrapper>
	)
}
