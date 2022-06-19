import "./App.css";
import BookList from "./components/BookList";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="App-content">
				<BookList title="💛 Want" />
				<BookList title="👀 Current" />
				<BookList title="🙌 Read" />
			</div>
		</div>
	);
}

export default App;
