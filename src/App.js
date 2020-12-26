import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NoteNavList from '../NoteNavList/NoteNavList';
import NoteNav from '../NoteNav/NoteNav';
import NoteMainList from '../NoteMainList/NoteMainList';
import NoteMain from '../NoteMain/NoteMain';
import dummyStore from '../dummy-store';
import {getNotesForFolder, findNote, findFolder} from '../notes-helpers';
import './App.css';

class App extends Component {
  state = {
      notes: [],
      folders: []
  };

 

  renderNavRoutes() {
      const {notes, folders} = this.state;
      return (
          <>
              {['/', '/folder/:folderId'].map(path => (
                  <Route
                      exact
                      key={path}
                      path={path}
                      render={routeProps => (
                          <NoteNavList
                              folders={folders}
                              notes={notes}
                              {...routeProps}
                          />
                      )}
                  />
              ))}
              <Route
                  path="/note/:noteId"
                  render={routeProps => {
                      const {noteId} = routeProps.match.params;
                      const note = findNote(notes, noteId) || {};
                      const folder = findFolder(folders, note.folderId);
                      return <NoteNav {...routeProps} folder={folder} />;
                  }}
              />
              <Route path="/add-folder" component={NoteNav} />
              <Route path="/add-note" component={NoteNav} />
          </>
      );
  }

  renderMainRoutes() {
      const {notes, folders} = this.state;
      return (
          <>
              {['/', '/folder/:folderId'].map(path => (
                  <Route
                      exact
                      key={path}
                      path={path}
                      render={routeProps => {
                          const {folderId} = routeProps.match.params;
                          const notesForFolder = getNotesForFolder(
                              notes,
                              folderId
                          );
                          return (
                              <NoteMainList
                                  {...routeProps}
                                  notes={notesForFolder}
                              />
                          );
                      }}
                  />
              ))}
              <Route
                  path="/note/:noteId"
                  render={routeProps => {
                      const {noteId} = routeProps.match.params;
                      const note = findNote(notes, noteId);
                      return <NoteMain {...routeProps} note={note} />;
                  }}
              />
          </>
      );
  }

  render() {
      return (
          <div className="App">
              <nav className="App__nav">{this.renderNavRoutes()}</nav>
              <header className="App__header">
                  <h1>
                      <Link to="/">Noteful</Link>{' '}
                      <FontAwesomeIcon icon="check-double" />
                  </h1>
              </header>
              <main className="App__main">{this.renderMainRoutes()}</main>
          </div>
      );
  }
}

export default App;