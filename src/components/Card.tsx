import {CardWrapper} from "../styled/CardWrapper";
import {CardImageWrapper} from "../styled/CardImageWrapper";
import {CardButton} from "../styled/CardButton";
import {CardImage} from "../styled/CardImage";
import {Actions} from "./Actions";
import notFound from "../../public/notfound.png"
import {Description} from "./Description";
import React, {useState} from "react";
import { Movie } from "../types/Movie";
import Link from 'next/link'
import {useRouter} from "next/dist/client/router";

export const Card: React.FC<{movie: Movie}> = ({movie}) => {
	const router = useRouter()
	const [imgSrc, setImgSrc] = useState(movie.poster_path || notFound.src)

	return (
		<CardWrapper>
			<CardImageWrapper>
				<Link
					href={{
						pathname: '/search',
						query: {
							...router.query,
							movie: movie.id,
						}
					}}
					passHref
				>
					<CardButton>
						<CardImage
							src={imgSrc}
							alt={movie.title}
							onError={() => {
								setImgSrc(notFound.src)
							}}
							width={322}
							height={483}
						/>
					</CardButton>
				</Link>

				<Actions id={movie.id}/>
			</CardImageWrapper>
			<Description movie={movie}/>
		</CardWrapper>
	)
}
