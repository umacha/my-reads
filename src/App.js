import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Search from "./pages/Search";
import BookDetailModal from "./components/BookDetailModal";
import React, { useCallback, useEffect, useState } from "react";
import ConfirmModal from "./components/ConfirmModal";
import { getAll, update } from "./BooksAPI";
import ActionModal from "./components/ActionModal";
import { message, SHELF_LIST } from "./utils/constant";

export const BooksOnShelves = React.createContext();
export const BooksSearched = React.createContext();

export default function App() {
	const [showDetail, setShowDetail] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [showSelectShelf, setShowSelectShelf] = useState(false);
	const [selectedBook, setSelectedBook] = useState(null);
	const [itemList, setItemList] = useState([]);
	const [searchedItemList, setSearchedItemList] = useState([]);
	const valueOnShelves = {
		itemList,
		setItemList,
	};
	const valueSearched = {
		searchedItemList,
		setSearchedItemList,
	};

	const getItemList = useCallback(() => {
		getAll()
			.then((results) => {
				setItemList(results);
			})
			.catch((e) => {
				console.error(e);
			});
	}, [setItemList]);

	useEffect(() => {
		getItemList();
	}, [getItemList]);

	const onClickBookItem = useCallback(
		(book) => {
			setSelectedBook(book);
			setShowDetail(true);
		},
		[setSelectedBook, setShowDetail]
	);

	const onClickRemove = useCallback(() => {
		setShowConfirm(true);
	}, [setShowConfirm]);

	const onClickAdd = useCallback(() => {
		setShowSelectShelf(true);
	}, [setShowSelectShelf]);

	const onClickCloseDetail = useCallback(() => {
		setShowDetail(false);
	}, []);

	const onClickCancelOnConfirm = useCallback(() => {
		setShowConfirm(false);
	}, [setShowConfirm]);

	/* For realtime update */
	const updateShelf = useCallback(
		(book, selectedShelf) => {
			let copy = [...itemList];
			const index = copy.findIndex(({ id }) => id === book.id);
			// まだshelfにない場合
			if (index === -1) {
				const b = { ...book };
				b.shelf = selectedShelf;
				copy = [...copy, b];
			} else {
				// 既に追加されている場合
				if (selectedShelf === "none") {
					copy.splice(index, 1);
				} else {
					copy[index].shelf = selectedShelf;
				}
			}
			console.log("新しいコピー: ", copy);
			setItemList(copy);
			update(book, selectedShelf);
		},
		[itemList]
	);

	const onClickOkOnConfirm = useCallback(() => {
		updateShelf(selectedBook, "none");
		setShowConfirm(false);
		setShowDetail(false);
	}, [selectedBook, setShowConfirm, setShowDetail, updateShelf]);

	const onClickCancelOnAction = useCallback(() => {
		setShowSelectShelf(false);
	}, []);

	const onClickShelf = useCallback(
		(shelf) => {
			updateShelf(selectedBook, shelf);
			setShowSelectShelf(false);
			setShowDetail(false);
		},
		[selectedBook, updateShelf]
	);

	return (
		<>
			<BooksOnShelves.Provider value={valueOnShelves}>
				<BooksSearched.Provider value={valueSearched}>
					<div className="App-content">
						<Routes>
							<Route
								exact
								path="/"
								element={<Main onClickBookItem={onClickBookItem} />}
							/>
							<Route
								path="/search"
								element={<Search onClickBook={onClickBookItem} />}
							/>
						</Routes>
					</div>
					<Header />
					<BookDetailModal
						visible={showDetail}
						book={selectedBook}
						onClickRemove={onClickRemove}
						onClickAdd={onClickAdd}
						onClickClose={onClickCloseDetail}
					/>
					<ConfirmModal
						visible={showConfirm}
						message={message.removeFromShelf}
						onClickCancel={onClickCancelOnConfirm}
						onClickOk={onClickOkOnConfirm}
					/>
					<ActionModal
						visible={showSelectShelf}
						message={`Which shelf do you want to put ${selectedBook?.title} on?`}
						buttons={SHELF_LIST}
						onClickCancel={onClickCancelOnAction}
						onClickShelf={onClickShelf}
						book={selectedBook}
					/>
				</BooksSearched.Provider>
			</BooksOnShelves.Provider>
		</>
	);
}
