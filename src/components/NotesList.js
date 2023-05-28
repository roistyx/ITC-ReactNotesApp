import React from "react";
import Note from "./Note";

function NotesList({ notes, checkToDelete }) {
	console.log("notes", notes);

	return notes.map((note) => {
		return <Note key={note.key} note={note} checkToDelete={checkToDelete} />;
	});
}

export default NotesList;
