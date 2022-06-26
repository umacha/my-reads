/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BookRemoveButton from "./BookRemoveButton";
import CloseButton from "./CloseButton";
import { useCallback, useContext, useMemo } from "react";
import BookAddButton from "./BookAddButton";
import { color } from "../utils/constant";
import Rate from "./Rate";
import { BooksOnShelves } from "../App";
import BookMoveButton from "./BookMoveButton";

const BookDetailModal = ({
	visible,
	book,
	onClickRemove,
	onClickAdd,
	onClickClose,
}) => {
	const { itemList, setItemList } = useContext(BooksOnShelves);

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

	const publishedDate = useMemo(() => {
		return book?.publishedDate ? book?.publishedDate : "Unknown";
	}, [book]);

	const publisher = useMemo(() => {
		return book?.publisher ? book?.publisher : "Unknown";
	}, [book]);

	const pageCount = useMemo(() => {
		return book?.pageCount ? book?.pageCount : "Unknown";
	}, [book]);

	const rate = useMemo(() => {
		return book?.averageRating ? book?.averageRating : 0;
	}, [book]);

	const rateCount = useMemo(() => {
		return book?.ratingsCount ? book?.ratingsCount : 0;
	}, [book]);

	const description = useMemo(() => {
		return book?.description || "";
	}, [book]);

	const isOnShelf = useMemo(() => {
		for (let item of itemList) {
			if (item.id === book?.id) {
				return true;
			}
		}
		return false;
	}, [itemList, book?.id]);

	const renderButton = useCallback(() => {
		const path = window.location.pathname;
		if (path === "/search") {
			if (isOnShelf) {
				return <BookMoveButton onClick={onClickAdd} />;
			}
			return <BookAddButton onClick={onClickAdd} />;
		}
		if (path === "/") {
			return <BookRemoveButton onClick={onClickRemove} />;
		}
	}, [onClickAdd, onClickRemove, isOnShelf]);

	if (!visible) return null;

	return (
		<div css={containerStyle}>
			<div css={cardStyle}>
				<div css={headerStyle}>
					<CloseButton
						size={30}
						fill={color.lightGray}
						onClick={onClickClose}
					/>
					{renderButton()}
				</div>
				<div css={contentStyle}>
					<div css={infoStyle}>
						<div>
							<img
								css={imageStyle}
								src={book.imageLinks.thumbnail}
								alt="sample"
							/>
						</div>
						<div css={infoRightStyle}>
							<p css={genreStyle}>{genre}</p>
							<p css={titleStyle}>{title}</p>
							<p css={authorStyle}>{author}</p>
							<div css={rateStyle}>
								<Rate rate={rate} rateCount={rateCount} />
							</div>
							<p css={dateStyle}>{`${publishedDate}`}</p>
							<p css={publisherStyle}>{`Published by ${publisher}`}</p>
							<p css={pageCountStyle}>{`${pageCount} Pages`}</p>
						</div>
					</div>
					<p css={descriptionStyle}>{description}</p>
				</div>
			</div>
		</div>
	);
};

const containerStyle = css(`
width: 100%;
height: 100%;
top: 0;
left: 0;
position: fixed;
background-color: rgba(0, 0, 0, 0.3);
display: flex;
justify-content: center;
align-items: center;
z-index: 100;
`);

const cardStyle = css({
	backgroundColor: color.middleGray,
	width: 500,
	height: "70%",
	borderRadius: 4,
	padding: "20px 30px 20px 30px",
	display: "flex",
	flexDirection: "column",
	gap: 10,
});

const headerStyle = css(`
display: flex;
flex-direction: row;
justify-content: space-between;
`);

const contentStyle = css(`
overflow: scroll;
display: flex;
flex-direction: column;
gap: 10px;
`);

const infoStyle = css(`
display: flex;
flex-direction: row;
gap: 20px;
`);

const imageStyle = css(`
width: 150px;
`);

const infoRightStyle = css(`
display: flex;
  flex-direction: column;
`);

const genreStyle = css(`
color: lightslategray;
font-size: 10pt;
margin: 0 0 10px 0;
`);

const titleStyle = css({
	color: color.lightGray,
	fontWeight: 600,
	fontSize: "15pt",
	margin: 0,
});

const authorStyle = css({
	color: color.lightGray,
	fontWeight: 600,
	fontSize: "10pt",
	margin: 0,
});

const dateStyle = css({
	color: color.lightGray,
	fontWeight: 600,
	fontSize: "10pt",
	marginBottom: 0,
});

const publisherStyle = css({
	color: color.lightGray,
	fontWeight: 600,
	fontSize: "10pt",
	margin: 0,
});

const pageCountStyle = css({
	color: color.lightGray,
	fontWeight: 600,
	fontSize: "10pt",
	margin: 0,
});

const rateStyle = css({
	margin: "5px 0",
});

const descriptionStyle = css({
	fontSize: "10pt",
	margin: 0,
	color: color.lightGray,
});

export default BookDetailModal;
