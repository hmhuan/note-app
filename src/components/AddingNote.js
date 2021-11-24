import "../public/css/Note.css";
import {useState} from "react";

function AddingNote({adddNote}) {
  const [note, setNote] = useState("");
  const limitRange = 200;

  const handleChange = (event) => {
    if (event.target.value.length <= limitRange) {
      setNote(event.target.value);
    }
  };

  const handleAddNote = () => {
    if (note.trim().length > 0) {
      adddNote(note);
      setNote("");
    }
  };
  return (
    <div className="note new">
      <textarea 
      rows="8" 
      cols="10" 
      placeholder="Type to add a new note..."
      value={note}
      onChange={handleChange}></textarea>
      <div className="note-footer">
        <small>{limitRange - note.length} Remaining</small>
        <button className="save" onClick={handleAddNote} >Save</button>
      </div>
    </div>
  );
}

export default AddingNote;
