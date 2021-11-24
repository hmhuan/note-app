import Note from "./Note";
import { useState } from "react";
import "../public/css/NoteList.css";
import AddingNote from "./AddingNote";

function NodeList({searchText}) {
  const getDate = (delimeter = "/") => {
    const date = new Date();
    return date;
  };

  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Hello World",
      date: getDate(),
    },
    {
      id: 2,
      text: "Hello World",
      date: getDate(),
    },
    {
      id: 3,
      text: "Hello Worldssssssssssssss dsasdasd asdsa",
      date: getDate(),
    },
  ]);

  const addNote = (text) => {
    const note = {
      id: notes.length + 1,
      text: text,
      date: getDate(),
    };
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="note-list">
      <AddingNote adddNote={addNote}/>
      {notes.filter((note) => {
        if (searchText.trim().length > 0) {
          return !note.text.includes(searchText);
        }
        return true;
      }).map((note) => (<Note key={note.id} note={note} deleteNote={deleteNote}/>))}

    </div>
  );
}

export default NodeList;
