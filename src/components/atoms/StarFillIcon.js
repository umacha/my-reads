import { color } from "../../utils/constant";

const StarFillIcon = ({ size, fill }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 48 48"
			fill={fill}
		>
			<path d="m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z" />
		</svg>
	);
};

StarFillIcon.defaultProps = {
	size: 48,
	fill: color.lightGray,
};

export default StarFillIcon;
