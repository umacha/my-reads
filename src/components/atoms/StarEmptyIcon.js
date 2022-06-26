import { color } from "../../utils/constant";

const StarEmptyIcon = ({ size, fill }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 48 48"
			fill={fill}
		>
			<path d="m17.15 35.85 6.85-5.2 6.85 5.2-2.75-8.65 6.3-4.1h-7.55L24 14.45l-2.85 8.65H13.6l6.3 4.1ZM11.65 44l4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6ZM24 25.15Z" />
		</svg>
	);
};

StarEmptyIcon.defaultProps = {
	size: 48,
	fill: color.lightGray,
};

export default StarEmptyIcon;
