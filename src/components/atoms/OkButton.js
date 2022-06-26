/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "../../utils/constant";

const OkButton = ({ onClick }) => {
	return (
		<button css={containerStyle} onClick={onClick}>
			OK
		</button>
	);
};

const containerStyle = css(`
	width: 80px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid ${color.red};
	background-color: transparent;
	color: ${color.red};
	cursor: pointer;
	font-size: 10pt;
	font-weight: 600;
`);

export default OkButton;
