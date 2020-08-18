import React from "react";
import Notes from "/imports/api/methods";
import { useTracker } from "meteor/react-meteor-data";

export default NotesList = () => {
  const { notes } = useTracker(() => {
    Meteor.subscribe("userNotes");
    return {
      notes: Notes.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
  });

  const deleteNotesHandler = (note) => {
    Meteor.call("removeNotes", note);
  };

  return (
    <List simple-list>
      {notes.map((note) => (
        <ListItem key={note._id} title={note.text}>
          <a
            href="#"
            onClick={() => deleteNotesHandler(note)}
            style={{ color: "red" }}
          >
            Delete
          </a>
        </ListItem>
      ))}
    </List>
  );
};
