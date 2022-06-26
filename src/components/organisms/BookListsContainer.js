/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "../../utils/constant";
import BookList from "./BookList";
import PropTypes from "prop-types";

const BookListsContainer = ({ shelfList, handleClick }) => {
	return (
		<div css={container}>
			{shelfList.map((shelf) => (
				<BookList key={shelf.id} shelf={shelf} handleClick={handleClick} />
			))}
		</div>
	);
};

BookListsContainer.propTypes = {
	shelfList: PropTypes.array.isRequired,
	handleClick: PropTypes.func.isRequired,
};

const container = css({
	display: "flex",
	flexDirection: "row",
	width: "calc(100%-10px)", // subtract padding
	height: "100vh",
	gap: 10,
	padding: 10,
	backgroundColor: color.surface,
});

export default BookListsContainer;
