import { ToolBarWrapper } from "../styled/ToolBarWrapper"
import { Genre } from "./Genre"
import { Sort } from "./Sort"

export const ToolBar = () => {
	return (
		<ToolBarWrapper jContent="space-between">
			<Genre />
			<Sort />
		</ToolBarWrapper>
	)
}
