import BookCard from "./BookCard";

const SearchList = ({ searchResults, onClickBook }) => {
	if (!searchResults || searchResults.length === 0) return null;

	return (
		<div className="search-list-container">
			{searchResults.length === 0
				? null
				: searchResults.map((book) => (
						<div key={book.id} className="clickable">
							<BookCard book={book} onClick={() => onClickBook(book)} />
						</div>
				  ))}
		</div>
	);
};

export default SearchList;
