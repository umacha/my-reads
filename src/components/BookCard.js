import { useCallback, useContext, useMemo } from "react";
import { BooksOnShelves } from "../App";
import noImage from "../assets/no-image.png";

const BookCard = ({ book, onClick }) => {
	const { itemList, setItemList } = useContext(BooksOnShelves);

	const image = useMemo(() => {
		return book.imageLinks?.smallThumbnail || noImage;
	}, [book]);

	const title = useMemo(() => {
		return book.title || "";
	}, [book]);

	const author = useMemo(() => {
		const authors = book.authors;
		if (!authors || authors.length === 0) return "";
		if (authors.length === 1) return authors[0];
		return authors.join(", ");
	}, [book]);

	const isOnShelf = useCallback(() => {
		if (window.location.pathname !== "/search") return;
		const item = itemList.find(({ id }) => book.id === id);
		return item !== undefined;
	}, [itemList, book]);

	return (
		<div className="book-card-container" onClick={() => onClick(book)}>
			<img className="book-card-img" src={image} alt="book" />
			<div className="book-card-info">
				<span className="book-card-title">{title}</span>
				<span className="book-card-text">{author}</span>
			</div>
			{isOnShelf() && <div className="book-card-overlay" />}
		</div>
	);
};

export default BookCard;
