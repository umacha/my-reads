import BookRemoveButton from "./BookRemoveButton";
import CloseButton from "./CloseButton";
import { useCallback, useMemo } from "react";
import BookAddButton from "./BookAddButton";

const BookDetailModal = ({
	visible,
	book,
	onClickRemove,
	onClickAdd,
	onClickClose,
}) => {
	const genre = useMemo(() => {
		if (!book?.categories) return "";
		return book?.categories?.join(", ");
	}, [book]);

	const title = useMemo(() => {
		const t = book?.title || "";
		const st = book?.subtitle ? ` - ${book?.subtitle}` : "";
		if (!t) return "";
		return t + st;
	}, [book]);

	const author = useMemo(() => {
		if (!book?.authors) return "";
		return book?.authors.join(", ");
	}, [book]);

	const description = useMemo(() => {
		return book?.description || "";
	}, [book]);

	const renderButton = useCallback(() => {
		const path = window.location.pathname;
		if (path === "/search") {
			return <BookAddButton onClick={onClickAdd} />;
		}
		if (path === "/") {
			return <BookRemoveButton onClick={onClickRemove} />;
		}
	}, [onClickAdd, onClickRemove]);

	if (!visible) return null;

	return (
		<div className="book-detail-modal">
			<div className="book-detail-card">
				<div className="book-detail-header">
					<CloseButton size={30} fill="#000000" onClick={onClickClose} />
					{renderButton()}
				</div>
				<div className="book-detail-content">
					<div className="book-detail-info">
						<div className="book-detail-info-left">
							<img
								className="book-detail-image"
								src={book.imageLinks.thumbnail}
								alt="sample"
							/>
						</div>
						<div className="book-detail-info-right">
							<p className="book-detail-genre">{genre}</p>
							<p className="book-detail-title">{title}</p>
							<p className="book-detail-author">{author}</p>
						</div>
					</div>
					<p className="book-detail-description">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default BookDetailModal;
