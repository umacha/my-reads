import BookList from "./BookList";

const BookListsContainer = ({ shelfList, handleClick }) => {
	return (
		<div className="book-lists-container">
			{shelfList.map((shelf) => (
				// Key should be right below map function
				<BookList key={shelf.id} shelf={shelf} handleClick={handleClick} />
			))}
		</div>
	);
};

export default BookListsContainer;
