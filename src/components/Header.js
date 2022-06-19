import search from "../assets/search.svg";

const Header = () => {
	return (
		<div className="header">
			<p>MYREADS</p>
			<img className="header-icon" src={search} alt="search" />
		</div>
	);
};

export default Header;
