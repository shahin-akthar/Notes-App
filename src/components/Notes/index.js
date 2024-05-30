// Write your code here

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  DivContainer,
  Heading,
  Container,
  Title,
  NotesInput,
  Image,
  NoNotes,
  WillAppear,
  Button,
  UnorderedList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesArray, setNotesArray] = useState([])

  const handleTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleNotesChange = event => {
    setNotes(event.target.value)
  }

  const addNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      notes,
    }

    setNotesArray(prevArray => [...prevArray, newNote])
    setTitle('')
    setNotes('')
  }

  return (
    <DivContainer>
      <Heading>Notes</Heading>
      <Container>
        <Title placeholder="Title" value={title} onChange={handleTitleChange} />
        <NotesInput
          placeholder="Take a Note..."
          rows="6"
          value={notes}
          onChange={handleNotesChange}
        />
        <Button onClick={addNote}>Add</Button>
      </Container>
      {notesArray.length === 0 ? (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotes>No Notes Yet</NoNotes>
          <WillAppear>Notes you add will appear here</WillAppear>
        </>
      ) : (
        <UnorderedList>
          {notesArray.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </UnorderedList>
      )}
    </DivContainer>
  )
}

export default Notes
