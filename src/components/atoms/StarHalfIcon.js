import { color } from "../../utils/constant";

const StarHalfIcon = ({ size, fill }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 48 48"
			fill={fill}
		>
			<path d="M24 14.45v16.2l6.85 5.2-2.75-8.65 6.3-4.1h-7.55ZM11.65 44l4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z" />
		</svg>
	);
};

StarHalfIcon.defaultProps = {
	size: 48,
	fill: color.lightGray,
};

export default StarHalfIcon;
