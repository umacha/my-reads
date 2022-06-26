/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BookCard from "../molecules/BookCard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { color } from "../../utils/constant";

const BookList = ({ shelf, handleClick }) => {
	return (
		<Droppable droppableId={shelf.id} direction="vertical">
			{(provided) => (
				<div
					css={listStyle}
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<div css={headerStyle}>
						<p css={titleStyle}>{shelf.title}</p>
						<p css={countStyle}>{shelf.items.length}</p>
					</div>
					<div css={contentStyle}>
						{shelf.items.map((item, i) => (
							<Draggable draggableId={item.id} key={item.id} index={i}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										css={[
											{
												...provided.draggableProps.style,
											},
											cardContainerStyle,
										]}
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

const listStyle = css({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	backgroundColor: color.middleGray,
	padding: "0 20px",
	borderRadius: 4,
	height: "calc(100% - 64px)",
});

const headerStyle = css({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
});

const titleStyle = css({
	fontSize: "15pt",
	fontWeight: 600,
	color: color.lightGray,
});

const countStyle = css({
	fontSize: "12pt",
	fontWeight: 600,
	color: color.lightGray,
});

const contentStyle = css({
	overflowY: "scroll",
	height: "100%",
});

const cardContainerStyle = css({
	marginBottom: "8px",
	float: "left",
});

export default BookList;
