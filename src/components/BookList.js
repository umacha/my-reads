import BookCard from "./BookCard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useCallback } from "react";

const BookList = ({ shelf, handleClick }) => {
	return (
		<Droppable droppableId={shelf.id} direction="vertical">
			{(provided) => (
				<div
					className="book-list"
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<div className="book-list-header">
						<p className="book-list-title">{shelf.title}</p>
						<p className="book-list-count">{shelf.items.length}</p>
					</div>
					<div className="book-list-content">
						{shelf.items.map((item, i) => (
							<Draggable draggableId={item.id} key={item.id} index={i}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										style={{
											marginBottom: "8px",
											...provided.draggableProps.style,
										}}
									>
										<BookCard book={item} onClick={handleClick} />
									</div>
								)}
							</Draggable>
						))}
					</div>
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};

export default BookList;
