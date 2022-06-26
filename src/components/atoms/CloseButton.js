/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { color } from "../../utils/constant";

const CloseButton = ({ size, fill, onClick }) => {
	return (
		<button css={containerStyle} onClick={onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height={size}
				width={size}
				viewBox="0 0 48 48"
				fill={fill}
			>
				<path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
			</svg>
		</button>
	);
};

CloseButton.defaultProps = {
	size: 48,
	fill: color.lightGray,
};

CloseButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

const containerStyle = css(`
border: none;
background-color: rgba(0, 0, 0, 0);
padding: 0;
cursor: pointer;
`);

export default CloseButton;
