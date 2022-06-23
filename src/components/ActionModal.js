import { useCallback, useContext, useMemo } from "react";
import { BooksOnShelves } from "../App";

const ActionModal = ({
	visible,
	message,
	buttons,
	onClickCancel,
	onClickShelf,
	book,
}) => {
	const { itemList, setItemList } = useContext(BooksOnShelves);

	const shelfName = useMemo(() => {
		const myItem = itemList?.find(({ id }) => id === book?.id);
		if (!myItem) return "none";
		return myItem.shelf;
	}, [itemList, book?.id]);

	const renderButton = useCallback(
		(id, title) => {
			if (shelfName === title) {
				return (
					<button key={title} className="action-card-selection-current">
						{title}
					</button>
				);
			} else {
				return (
					<button
						key={title}
						className="action-card-selection"
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
		<div className="action-modal">
			<div className="action-card">
				<p className="action-card-message">{message}</p>
				{buttons.map(({ id, title }) => renderButton(id, title))}
				<button className="action-card-cancel" onClick={onClickCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default ActionModal;
