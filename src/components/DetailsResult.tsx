import {DetailsResultWrapper} from "../styled/DetailsResultWrapper"
import {DetailsInfo} from "./DetailsInfo";
import {useSelector} from "react-redux";
import {selectMovie} from "../redux/movieSlice";
import notFound from "/public/notfound.png";
import {useEffect, useState} from "react";
import styled from "styled-components";
import Image from 'next/image';

export const DetailsResult = () => {
	const movie = useSelector(selectMovie)
	const [movieSrc, setMovieSrc] = useState<string>(movie.poster_path || notFound.src)

	useEffect(() => {
		setMovieSrc(movie.poster_path)
	}, [movie.poster_path])

	return (
		<>
			<DetailsResultWrapper>
				<ImageFix>
					<Image
						src={movieSrc}
						alt={`Poster movie ${movie.title}`}
						width={324}
						height={486}
						objectFit="cover"
						onError={() => {
							setMovieSrc(notFound.src)
						}}
					/>
				</ImageFix>
				<DetailsInfo/>
			</DetailsResultWrapper>
		</>
	)
}

const ImageFix = styled.div`
	margin-right: 60px;
	flex-grow: 1;
	flex-shrink: 0;
`;
