import {React, useState} from 'react'
import '../App.css';
import Modal from './Modal.js';

function Note({note, checkToDelete} ) {
    const [isOpen, setIsOpen] = useState(false)

    function handleNoteClick() {
        checkToDelete(note.key)
      }
   
    return ( <>
        
        <div className="flex-row">
            <div  >
            <Modal open={isOpen} onClose={() => setIsOpen(false) } v> Fancy Modal</Modal>
            </div>
        
            <div onClick={() => setIsOpen(true)}>
                <input type="checkbox" className="checkbox" onChange={handleNoteClick} checked={note.toDelete}/>
                <div className="note-time"> 
                    {note.date}
                </div> 
                <div className="note-time"> 
                    {note.title}
                </div> 
                <div className="note-content">
                    {note.name}
                </div>

            </div>
        </div>
    </>
  )
}

export default Note
