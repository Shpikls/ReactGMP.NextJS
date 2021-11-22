import { SortSelectWrapper } from "../styled/SortSelectWrapper";
import { SortSelectInner } from "../styled/SortSelectInner";
import React from "react";
import { useRouter } from "next/dist/client/router";

export const SortSelect: React.FC = ({ children }) => {
	const router = useRouter()
	const handleChange = (value: string) => {
		if (value) {
			router.push({
				pathname: '/search',
				query: {
					...router.query,
					sortBy: value,
					sortOrder: 'desc',
				}
			})
		} else {
			delete router.query.sortBy
			delete router.query.sortOrder
			router.push({
				pathname: '/search',
				query: {
					...router.query,
				}
			})
		}
	}

	return (
		<SortSelectWrapper>
			<SortSelectInner
				value={router.query.sortBy || ''}
				onChange={(e) => {
					handleChange(e.target.value)
				}}
			>
				{children}
			</SortSelectInner>
		</SortSelectWrapper>
	)
}
