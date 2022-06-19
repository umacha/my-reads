import BookCard from "./BookCard";
import EmptyCard from "./EmptyCard";

const BookList = (props) => {
	return (
		<div className="book-list-container">
			<p className="book-list-title">{props.title}</p>
			<div className="book-list">
				<BookCard />
				<BookCard />
				<BookCard />
				<EmptyCard />
			</div>
		</div>
	);
};

export default BookList;
