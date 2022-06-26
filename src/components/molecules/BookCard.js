/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useContext, useMemo } from "react";
import { BooksOnShelves } from "../../App";
import noImage from "../../assets/no-image.png";

const BookCard = ({ book, onClick }) => {
	const { itemList } = useContext(BooksOnShelves);

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
		<div css={containerStyle} onClick={() => onClick(book)}>
			<img css={imageStyle} src={image} alt="book" />
			<div css={infoStyle}>
				<span css={titleStyle}>{title}</span>
				<span css={textStyle}>{author}</span>
			</div>
			{isOnShelf() && <div css={overlayStyle} />}
		</div>
	);
};

const containerStyle = css(`
	width: 100px;
	height: 180px;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	margin-right: 15px;
	position: relative;
	border: 1px solid rgba(0, 0, 0, 0.1);
`);

const imageStyle = css(`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`);

const infoStyle = css(`
	height: auto;
	width: calc(100% - 10px);
	background-color: rgba(0, 0, 0, 0.8);
	position: absolute;
	padding: 5px;
	display: flex;
	flex-direction: column;
	bottom: 0;
	margin: 0;
`);

const titleStyle = css(`
	font-size: 8pt;
	font-weight: 600;
	overflow-wrap: break-word;
	color: white;
`);

const textStyle = css(`
font-size: 8pt;
color: white;
overflow-wrap: break-word;
`);

const overlayStyle = css(`
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.7);
position: absolute;
`);

export default BookCard;
