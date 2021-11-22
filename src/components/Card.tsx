import {CardWrapper} from "../styled/CardWrapper";
import {CardImageWrapper} from "../styled/CardImageWrapper";
import {CardButton} from "../styled/CardButton";
import {CardImage} from "../styled/CardImage";
import {Actions} from "./Actions";
import notFound from "../assets/notfound.png"
import {Description} from "./Description";
import React from "react";
import { Movie } from "../types/Movie";
import Link from 'next/link'
import {useRouter} from "next/dist/client/router";

export const Card: React.FC<{movie: Movie}> = ({movie}) => {
	const router = useRouter()

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
							src={movie.poster_path}
							alt={movie.title}
							onError={(e) => {
								(e.target as HTMLImageElement).onerror = null;
								(e.target as HTMLImageElement).src = `${notFound.src}`
							}}
						/>
					</CardButton>
				</Link>

				<Actions id={movie.id}/>
			</CardImageWrapper>
			<Description movie={movie}/>
		</CardWrapper>
	)
}
