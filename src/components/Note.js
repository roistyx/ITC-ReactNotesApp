import { React, useState } from "react";
import "../App.css";
import Modal from "./Modal.js";

function Note({ note, checkToDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleNoteClick() {
    checkToDelete(note.key);
  }

  return (
    <>
      <div className="flex-row">
        <div>
          <button className="close-button" onClick={handleNoteClick}>&times;</button>
          <div onClick={() => setIsOpen(true)}>
            <div className="note-time">{note.date}</div>
            <div className="note-time">{note.title}</div>
            <div className="note-content">{note.name}</div>
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} note={note}>
        {" "}
        Fancy Modal
      </Modal>
    </>
  );
}

export default Note;
