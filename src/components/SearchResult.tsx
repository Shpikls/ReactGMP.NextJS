import { SearchResultWrapper } from "../styled/SearchResultWrapper";
import { SearchResultMovie } from "./SearchResultMovie";
import { ToolBar } from "./ToolBar";

export const SearchResult = () => {
	return (
		<SearchResultWrapper>
			<ToolBar />
			<SearchResultMovie />
		</SearchResultWrapper>
	)
}
