/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback } from "react";
import { color } from "../../utils/constant";
import SearchIcon from "../atoms/SearchIcon";

const SearchBar = ({ setSearchQuery }) => {
	const onChange = useCallback(
		(e) => {
			setSearchQuery(e.target.value);
		},
		[setSearchQuery]
	);

	return (
		<div css={containerStyle}>
			<SearchIcon size={20} fill={color.lightGray} />
			<input
				css={inputStyle}
				id="search-query"
				type="text"
				onChange={(e) => onChange(e)}
				placeholder={"Title, Author or Genre"}
			/>
		</div>
	);
};

const containerStyle = css({
	borderBottom: `1px solid ${color.lightGray}`,
	display: "flex",
	flexDirection: "row",
	gap: "10",
	height: 50,
	alignItems: "center",
});

const inputStyle = css`
	border: none;
	outline: none;
	font-size: 12pt;
	width: 100%;
	background-color: ${color.surface};
	color: ${color.white};
	&:focus {
		background-color: ${color.surface};
	}
`;

export default SearchBar;
