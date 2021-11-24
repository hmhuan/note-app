import { MdDeleteForever } from "react-icons/md";
import "../public/css/Note.css";

function Note({note, deleteNote}) {
  const handleDelete = () => {
    deleteNote(note.id);
  };
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date.toLocaleDateString()}</small>
        <MdDeleteForever className="delete-icon" size= "1.3em" onClick={handleDelete}/>
      </div>
    </div>
  );
}

export default Note;