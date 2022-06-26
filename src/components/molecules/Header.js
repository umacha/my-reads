/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { color } from "../../utils/constant";
import SearchIcon from "../atoms/SearchIcon";

const Header = () => {
	return (
		<div css={headerStyle}>
			<Link to="/" style={{ textDecoration: "none" }}>
				<p css={titleStyle}>MYREADS</p>
			</Link>
			<Link to="/search">
				<SearchIcon size="20" fill={color.lightGray} />
			</Link>
		</div>
	);
};

const headerStyle = css({
	padding: "0 20px",
	backgroundColor: color.black,
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	fontSize: "12pt",
	alignItems: "center",
	boxShadow: "0 1px 10px 0 rgba(0, 0, 0, 0.3)",
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	zIndex: 99,
});

const titleStyle = css({
	color: color.lightGray,
	fontWeight: 600,
});

export default Header;
