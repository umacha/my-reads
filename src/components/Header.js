import { Link } from "react-router-dom";
import SearchIcon from "./SearchIcon";

const Header = () => {
	return (
		<div className="header">
			<Link to="/" style={{ textDecoration: "none" }}>
				<p className="header-title">MYREADS</p>
			</Link>
			<Link to="/search">
				<SearchIcon size="20" fill="#ffffff" />
			</Link>
		</div>
	);
};

export default Header;
