import { Meteor } from "meteor/meteor";
import Notes from "/imports/api/methods";

function insertLink({ text }) {
  Notes.insert({ text, createdAt: new Date() });
}

Meteor.startup(() => {
  if (!Accounts.findUserByUsername("meteorite")) {
    Accounts.createUser({
      username: "meteorite",
      password: "password",
    });
  }

  if (Notes.find().count() === 0) {
    ["No Notes found"].forEach(insertLink);
  }
});

Meteor.publish("userNotes", function () {
  return Notes.find({ user: this.userId });
});
