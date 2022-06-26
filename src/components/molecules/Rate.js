/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback } from "react";
import { color } from "../../utils/constant";
import StarEmptyIcon from "../atoms/StarEmptyIcon";
import StarFillIcon from "../atoms/StarFillIcon";
import StarHalfIcon from "../atoms/StarHalfIcon";

const Rate = ({ rate, rateCount }) => {
	const renderStarList = useCallback(() => {
		let list = [];
		for (let i in [...Array(5)]) {
			const index = Number(i);
			if (index + 0.5 <= rate && rate < index + 1) {
				list.push(
					<StarHalfIcon key={`half_${i}`} size={15} fill={color.green} />
				);
			} else if (index + 1 <= rate) {
				list.push(
					<StarFillIcon key={`filled_${i}`} size={15} fill={color.green} />
				);
			} else {
				list.push(
					<StarEmptyIcon key={`empty_${i}`} size={15} fill={color.green} />
				);
			}
		}
		return list;
	}, [rate]);

	return (
		<div css={containerStyle}>
			<span css={rateStyle}>{rate}</span>
			<div css={starListStyle}>{renderStarList()}</div>
			<span css={rateCountStyle}>{`(${rateCount})`}</span>
		</div>
	);
};

const containerStyle = css({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: 5,
});

const starListStyle = css({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
});

const rateStyle = css({
	color: color.white,
	fontSize: "10pt",
});

const rateCountStyle = css({
	color: color.white,
	fontSize: "10pt",
});

export default Rate;
