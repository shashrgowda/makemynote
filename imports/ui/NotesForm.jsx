import React, { useState } from "react";

export default NotesForm = () => {
  const [myNotes, setMyNotes] = useState("");

  const addNotesHandler = () => {
    Meteor.call("addNotes", myNotes, (err) => {
      if (err) {
        alert(`Login to add notes`);
      }
      setMyNotes("");
    });
  };

  return (
    <List noHairlinesMd>
      <ListInput
        label="Add Notes"
        type="textarea"
        placeholder="Your notes.."
        onChange={(e) => setMyNotes(e.target.value)}
        value={myNotes}
      >
        <Icon icon="demo-list-icon" slot="media" />
      </ListInput>
      <Button color="green" onClick={addNotesHandler}>
        ADD
      </Button>
    </List>
  );
};
