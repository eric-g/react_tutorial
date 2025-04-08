import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [message, setErrorMessage] = useState(null)

  useEffect(() => {
    noteService
    .getAll()
    .then((initData) => {
      setNotes(initData)
      })
    }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }
    noteService
    .create(noteObject)
    .then((response) => {
      setNotes(notes.concat(response))
      setNewNote('')
      setErrorMessage({message: 'Added a new note', className: 'success'})
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    .catch((error) => {
      setErrorMessage({message: `${error.response.data.error}`, className: 'error' })
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
      })
      .catch((error) => {
        setErrorMessage(`Note '${note.content}' was already deleted from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter((n) => n.id !== id))
      })
  }

  const deleteNote = (id) => {
    const note = notes.find(n => n.id === id)
    if (window.confirm(`Delete ${note.content}?`)) {
      noteService
        .deleteNote(id)
        .then(() => {
          setNotes(notes.filter((n) => n.id !== id))
        })
        .catch((error) => {
          setErrorMessage({className: 'error', message: `Note '${note.content}' was already deleted from server`})
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNotes(notes.filter((n) => n.id !== id))
        })
    }
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
        <Notification message={message} />  
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} deleteNote={() => deleteNote(note.id)} toggleImportance={() => toggleImportanceOf(note.id)}/>
        ))}
      </ul>
      <form className="forms" onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )

}

export default App