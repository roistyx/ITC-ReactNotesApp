import "./App.css";
import { useState, useRef } from "react";
import NotesList from "./components/NotesList";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [notes, setNotes] = useState([]);
	const noteRefText = useRef();
	const titleRefText = useRef("Subject");

	function handleAddNote() {
		const title = titleRefText.current.value;
		const name = noteRefText.current.value;
		const dateToFormat = new Date().toString();

		if (name === "") return;
		setNotes((prevNote) => {
			return [
				...prevNote,
				{
					key: uuidv4(),
					name: name,
					date: dateToFormat,
					title: title,
					toDelete: false,
				},
			];
		});
		titleRefText.current.value = null;
		noteRefText.current.value = null;
	}

	function checkToDelete(key) {
		const newNotes = [...notes];
		const note = newNotes.find((note) => note.key === key);
		note.toDelete = !note.toDelete;
		if (window.confirm("Do you really want to delete?")) {
			const updatedNotes = notes.filter((note) => !note.toDelete);
			setNotes(updatedNotes);
		}
	}

	return (
		<>
			<div className="top-section">
				<div className="main-content">
					<span className="headline-span">My Notes</span>
					<div className="form-group"></div>
					<div className="form-group">
						<input
							ref={titleRefText}
							placeholder="Title (optional)"
							className="input-control"
						/>
						<textarea
							ref={noteRefText}
							placeholder="Body"
							className="input-control"
						/>
					</div>
					<button onClick={handleAddNote} className="input-control">
						Add me
					</button>
				</div>
			</div>
			<div className="flex-container">
				<NotesList notes={notes} checkToDelete={checkToDelete} />
			</div>
		</>
	);
}

export default App;
