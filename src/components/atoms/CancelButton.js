/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "../../utils/constant";

const CancelButton = ({ onClick }) => {
	return (
		<button css={containerStyle} onClick={onClick}>
			Cancel
		</button>
	);
};

const containerStyle = css(`
	width: 80px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid ${color.lightGray};
	background-color: transparent;
	color: ${color.lightGray};
	cursor: pointer;
	font-size: 10pt;
	font-weight: 600;
`);

export default CancelButton;
