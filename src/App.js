import './App.css';
import {useState, useRef} from 'react'
import NotesList from './components/NotesList'

function App() {
  const [notes, setNotes] = useState([])
  const noteRefText = useRef()
  const titleRefText = useRef("Subject")

  function checkToDelete(key) {
    const newNotes = [...notes]
    const note = newNotes.find(note => note.key === key)
    note.toDelete = !note.toDelete
    if (window.confirm("Do you really want to delete?")) {
      const updatedNotes = notes.filter(note => !note.toDelete)
      setNotes(updatedNotes) 
    }
  }
  
  function handleAddNote () {
    const title = titleRefText.current.value
    const name = noteRefText.current.value
    const dateToFormat = new Date().toString()
    console.log("this is a subject", title)

    if (name === "") return
    setNotes(prevNote => {
        return [...prevNote, {key: name, name: name, date: dateToFormat, title: title, toDelete: false}]
    })
    titleRefText.current.value = null
    noteRefText.current.value = null
  }
    
  return (
    <>
      <div className="top-section">
        <div className="main-content">
          <span className="headline-span" >My Notes</span>
          <div className="form-group" >
          </div>
            <div className="form-group">
              <input ref={titleRefText} placeholder="Title (optional)" className="input-control"/>
              <textarea ref={noteRefText} placeholder="Body" className="input-control"/>
            </div> 
          <button 
            onClick={handleAddNote} className="input-control">
              Add
          </button>
        </div>
      </div>
      <div className="flex-container"> 
        <NotesList notes={notes} checkToDelete={checkToDelete}/>
      </div>
    </>
  );
}

export default App;
