import { useContext, useEffect, useMemo, useState } from "react";
import { BooksSearched } from "../App";
import { search } from "../BooksAPI";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";

const Search = ({ onClickBook }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const { searchedItemList, setSearchedItemList } = useContext(BooksSearched);

	useEffect(() => {
		setSearchQuery("");
	}, []);

	useEffect(() => {
		if (!searchQuery) {
			setSearchedItemList([]);
			return;
		}
		search(searchQuery, 200)
			.then((results) => {
				if (Array.isArray(results)) setSearchedItemList(results);
				else setSearchedItemList([]);
			})
			.catch((e) => {
				console.error(e);
				setSearchedItemList([]);
			});
	}, [searchQuery, setSearchedItemList]);

	const searchCount = useMemo(() => {
		const count = searchedItemList.length;
		if (count <= 1) return `${count} Book Found`;
		return `${count} Books Found`;
	}, [searchedItemList]);

	return (
		<div className="search-container">
			<SearchBar setSearchQuery={setSearchQuery} />
			<p className="search-count">{searchCount}</p>
			<SearchList searchResults={searchedItemList} onClickBook={onClickBook} />
		</div>
	);
};

export default Search;
