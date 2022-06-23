import { useCallback } from "react";
import SearchIcon from "./SearchIcon";

const SearchBar = ({ setSearchQuery }) => {
	const onChange = useCallback(
		(e) => {
			setSearchQuery(e.target.value);
		},
		[setSearchQuery]
	);

	return (
		<div className="search-bar">
			<SearchIcon size={20} fill="#BDBDBD" />
			<input
				className="search-bar-input"
				id="search-query"
				type="text"
				onChange={(e) => onChange(e)}
				placeholder={"Title, Author or Genre"}
			/>
		</div>
	);
};

export default SearchBar;
