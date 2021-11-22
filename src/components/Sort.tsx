import { SortTextLabel } from "../styled/SortTextLabel";
import { SortWrapper } from "../styled/SortWrapper";
import { SortOption } from "../styled/SortOption";
import { SortSelect } from "./SortSelect";
import {sortBy} from "../staticData/sortBy";

export const Sort = () => {
	return (
		<SortWrapper>
			<SortTextLabel>Sort by</SortTextLabel>
			<SortSelect>
				{sortBy.map((sortItem) => <SortOption key={sortItem.id} value={sortItem.value}>{sortItem.showValue}</SortOption>)}
			</SortSelect>
		</SortWrapper>
	)
}
