/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BookCard from "../molecules/BookCard";

const SearchList = ({ searchResults, onClickBook }) => {
	if (!searchResults || searchResults.length === 0) return null;

	return (
		<div css={containerStyle}>
			{searchResults.length === 0
				? null
				: searchResults.map((book) => (
						<div key={book.id} css={cardContainerStyle}>
							<BookCard book={book} onClick={() => onClickBook(book)} />
						</div>
				  ))}
		</div>
	);
};

const containerStyle = css(`
display: flex;
flex-direction: row;
gap: 10px;
flex-wrap: wrap;
`);

const cardContainerStyle = css(`
cursor: pointer;
`);

export default SearchList;
