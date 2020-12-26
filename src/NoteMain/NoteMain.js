import React from 'react'
import Note from '../Note/Note'
import './NoteMain.css'

export default function NoteMain(props) {
  return (
    <section className='NoteMain'>
      <Note
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <div className='NoteMain__content'>
        {props.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}

NoteMain.defaultProps = {
  note: {
    content: '',
  }
}