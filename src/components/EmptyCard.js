import addCircle from "../assets/add_circle.svg";

const EmptyCard = () => {
	return (
		<div className="empty-card-container">
			<img className="empty-card-icon" src={addCircle} alt="add_circle" />
		</div>
	);
};

export default EmptyCard;
