import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import ButtonAdded from '../ButtonAdded/ButtonAdded'
import './NoteMainList.css'

export default function NoteMainList(props) {
  return (
    <section className='NoteMainList'>
      <ul>
        {props.notes.map(note =>
          <li key={note.id}>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
      <div className='NoteMainList__button-container'>
        <ButtonAdded
          tag={Link}
          to='/add-note'
          type='button'
          className='NoteMainList__add-note-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          Note
        </ButtonAdded>
      </div>
    </section>
  )
}

NoteMainList.defaultProps = {
  notes: [],
}