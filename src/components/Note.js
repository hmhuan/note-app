import { MdDeleteForever } from "react-icons/md";
import "../public/css/Note.css";

function Note({note, deleteNote}) {
  const handleDelete = () => {
    deleteNote(note.id);
  };
  const getDate = (date) => {
    return new Date(note.date).toLocaleDateString();
  }
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{getDate()}</small>
        <MdDeleteForever className="delete-icon" size= "1.3em" onClick={handleDelete}/>
      </div>
    </div>
  );
}

export default Note;