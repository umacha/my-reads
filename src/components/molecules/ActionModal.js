/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useContext, useMemo } from "react";
import { BooksOnShelves } from "../../App";
import { color } from "../../utils/constant";

const ActionModal = ({
	visible,
	message,
	buttons,
	onClickCancel,
	onClickShelf,
	book,
}) => {
	const { itemList } = useContext(BooksOnShelves);

	const shelfName = useMemo(() => {
		const myItem = itemList?.find(({ id }) => id === book?.id);
		if (!myItem) return "none";
		return myItem.shelf;
	}, [itemList, book?.id]);

	const renderButton = useCallback(
		(id, title) => {
			if (shelfName === id) {
				return (
					<button key={title} css={currentSelectionStyle}>
						{title}
					</button>
				);
			} else {
				return (
					<button
						key={title}
						css={selectionStyle}
						onClick={() => onClickShelf(id)}
					>
						{title}
					</button>
				);
			}
		},
		[onClickShelf, shelfName]
	);

	if (!visible) return null;

	return (
		<div css={modalStyle}>
			<div css={cardStyle}>
				<p css={messageStyle}>{message}</p>
				{buttons.map(({ id, title }) => renderButton(id, title))}
				<button css={cancelStyle} onClick={onClickCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
};

const modalStyle = css({
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
	position: "fixed",
	backgroundColor: color.blackTransparent,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	zIndex: 100,
});

const cardStyle = css({
	width: "300px",
	height: "auto",
	borderRadius: 4,
	display: "flex",
	flexDirection: "column",
	overflow: "hidden",
	backgroundColor: color.middleGray,
});

const messageStyle = css({
	flex: 1,
	margin: 0,
	padding: 16,
	fontSize: "12pt",
	fontWeight: 600,
	borderBottom: `1px solid ${color.whiteTransparent12}`,
	color: color.lightGray,
});

const selectionStyle = css`
	flex: 1;
	padding: 12px;
	font-size: 10pt;
	border: none;
	cursor: pointer;
	background-color: transparent;
	color: ${color.lightGray};
`;

const currentSelectionStyle = css`
	flex: 1;
	padding: 12px;
	font-size: 10pt;
	color: ${color.green};
	font-weight: 600;
	border: none;
	background-color: ${color.lightGreen};
`;

const cancelStyle = css({
	flex: 1,
	padding: 12,
	color: color.red,
	fontSize: "10pt",
	border: "none",
	cursor: "pointer",
	backgroundColor: "transparent",
});

export default ActionModal;
