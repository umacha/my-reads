/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { BooksSearched } from "../App";
import { search } from "../BooksAPI";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import { color } from "../utils/constant";

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
				console.log("results: ", results);
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
		<div css={containerStyle}>
			<SearchBar setSearchQuery={setSearchQuery} />
			<p css={countStyle}>{searchCount}</p>
			<SearchList searchResults={searchedItemList} onClickBook={onClickBook} />
		</div>
	);
};

const containerStyle = css({
	padding: "10px 20px",
	display: "flex",
	flexDirection: "column",
	gap: 5,
	backgroundColor: color.surface,
	height: "100vh",
});

const countStyle = css({
	color: color.lightGray,
});

export default Search;
