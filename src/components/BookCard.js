import sampleImg from "../assets/book-cover_fermat.jpg";

const BookCard = () => {
	return (
		<div className="book-card-container">
			<img className="book-card-img" src={sampleImg} alt="sample_img" />
			<div className="book-card-info">
				<span className="book-card-title">Fermat's Last Theorem</span>
				<span className="book-card-text">Simon Singh</span>
			</div>
		</div>
	);
};

export default BookCard;
