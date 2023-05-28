import React from "react";

export default function Modal({ open, children, onClose, note }) {
	if (!open) return null;
	console.log("note", note);

	return (
		<>
			<div className="overlay"></div>
			<div className="modal">
				<button onClick={onClose}>X</button>
				<div className="note-time">{note.date}</div>
				<div className="note-time">{note.title}</div>
				<div className="note-content">{note.name}</div>
			</div>
		</>
	);
}
