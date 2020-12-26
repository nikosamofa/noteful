import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonAdded from '../ButtonAdded/ButtonAdded'
import { countNotesForFolder } from '../notes-helpers'
import './NoteNavList.css'

export default function NoteNavList(props) {
  return (
    <div className='NoteNavList'>
      <ul className='NoteNavList__list'>
        {props.folders.map(folder =>
          <li key={folder.id}>
            <NavLink
              className='NoteNavList__folder-link'
              to={`/folder/${folder.id}`}
            >
              <span className='NoteNavList__num-notes'>
                {countNotesForFolder(props.notes, folder.id)}
              </span>
              {folder.name}
            </NavLink>
          </li>
        )}
      </ul>
      <div className='NoteNavList__button-wrapper'>
        <ButtonAdded
          tag={Link}
          to='/add-folder'
          type='button'
          className='NoteNavList__add-folder-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          Folder
        </ButtonAdded>
      </div>
    </div>
  )
}

NoteNavList.defaultProps = {
  folders: []
}