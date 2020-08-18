import { Mongo } from "meteor/mongo";

export default Notes = new Mongo.Collection("notes");

Meteor.methods({
  addNotes(note) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("Unauthorized!");
    }

    Notes.insert({
      text: note,
      createdAt: new Date(),
      user: Meteor.userId(),
    });
  },

  removeNotes(note) {
    if (Meteor.userId() !== note.user) {
      throw new Meteor.Error("Unauthorized!");
    }

    Notes.remove(note._id);
  },
});
