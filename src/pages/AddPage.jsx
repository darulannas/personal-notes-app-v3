import React from "react";
// import { addNote } from "../utils/local-data";
import { addNote } from "../utils/network-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  async function onAddHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <section>
      <NoteInput addNote={onAddHandler} />
    </section>
  );
}

export default AddPage;
