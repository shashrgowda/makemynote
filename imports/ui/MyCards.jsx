import React from "react";
import Notes from "/imports/api/methods";
import { useTracker } from "meteor/react-meteor-data";
import FacebookCards from "./Cards";
import Nav from "./Nav";
import { PageContent } from "framework7-react";

export default MyCards = () => {
  const { notes } = useTracker(() => {
    Meteor.subscribe("userNotes");
    return {
      notes: Notes.find().fetch(),
    };
  });

  const username = localStorage.getItem("userToken");

  return (
    <Page>
      <Nav />
      <PageContent>
        {notes.map((note) => (
          <FacebookCards
            key={note._id}
            user={username}
            text={note.text}
            createdAt={note.createdAt}
          />
        ))}
      </PageContent>
    </Page>
  );
};
