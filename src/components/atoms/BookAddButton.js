/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "../../utils/constant";
import PropTypes from "prop-types";

const BookAddButton = ({ onClick }) => {
	return (
		<button css={containerStyle} onClick={onClick}>
			Add
		</button>
	);
};

BookAddButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

const containerStyle = css`
	width: 80px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid ${color.green};
	background-color: transparent;
	color: ${color.green};
	cursor: pointer;
	font-size: 10pt;
	font-weight: 600;
`;

export default BookAddButton;
