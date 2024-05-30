// Write your code here

import {ListElement, TitleEl, NotesEl} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, notes} = noteDetails

  return (
    <ListElement>
      <TitleEl>{title}</TitleEl>
      <NotesEl>{notes}</NotesEl>
    </ListElement>
  )
}

export default NoteItem
