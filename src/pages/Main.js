/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { BooksOnShelves } from "../App";
import { update } from "../BooksAPI";
import BookListsContainer from "../components/BookListsContainer";

const Main = ({ onClickBookItem }) => {
	const [want, setWant] = useState([]);
	const [current, setCurrent] = useState([]);
	const [read, setRead] = useState([]);
	const { itemList, setItemList } = useContext(BooksOnShelves);

	useEffect(() => {
		console.log("itemList: ", itemList);
		const w = itemList.filter(({ shelf }) => shelf === "wantToRead");
		const c = itemList.filter(({ shelf }) => shelf === "currentlyReading");
		const r = itemList.filter(({ shelf }) => shelf === "read");
		setWant(w);
		setCurrent(c);
		setRead(r);
	}, [itemList]);

	const shelfList = useMemo(() => {
		return [
			{ id: "wantToRead", title: "💛 WANT", items: want },
			{ id: "currentlyReading", title: "👀 CURRENT", items: current },
			{ id: "read", title: "🙌 READ", items: read },
		];
	}, [want, current, read]);

	const updateShelf = useCallback((book, shelf) => {
		update(book, shelf)
			.then(console.log("shelf updated"))
			.catch((e) => console.error(e));
	}, []);

	const updateItemList = useCallback(
		(book, shelf) => {
			const copy = [...itemList];
			const index = copy.findIndex(({ id }) => id === book.id);
			copy[index].shelf = shelf;
			setItemList(copy);
		},
		[itemList, setItemList]
	);

	const handleDragEnd = useCallback(
		(result) => {
			const { source, destination } = result;
			const _want = want.slice();
			const _current = current.slice();
			const _read = read.slice();

			// Reorder in the same shelf
			if (source.droppableId === destination.droppableId) {
				const _items =
					source.droppableId === "wantToRead"
						? _want
						: source.droppableId === "currentlyReading"
						? _current
						: _read;
				const setData =
					source.droppableId === "wantToRead"
						? setWant
						: source.droppableId === "currentlyReading"
						? setCurrent
						: setRead;
				const [removed] = _items.splice(source.index, 1);
				_items.splice(destination.index, 0, removed);
				setData(_items);
			}

			// Move to other shelf
			else {
				const sourceList =
					source.droppableId === "wantToRead"
						? _want
						: source.droppableId === "currentlyReading"
						? _current
						: _read;
				const destinationList =
					destination.droppableId === "wantToRead"
						? _want
						: destination.droppableId === "currentlyReading"
						? _current
						: _read;

				const targetBook = sourceList[source.index];
				const targetShelf = destination.droppableId;
				updateShelf(targetBook, targetShelf);
				updateItemList(targetBook, targetShelf);

				const [removed] = sourceList.splice(source.index, 1);
				destinationList.splice(destination.index, 0, removed);
				setWant(_want);
				setCurrent(_current);
				setRead(_read);
			}
		},
		[want, current, read, updateShelf, updateItemList]
	);

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<BookListsContainer shelfList={shelfList} handleClick={onClickBookItem} />
		</DragDropContext>
	);
};

export default Main;
