import React, { useState } from "react";
import NotesForm from "./NotesForm";
import NotesList from "./Notes";
import Navigate from "./Navigation";
import Nav from "./Nav";

const Info = () => {
  // const logoutUser = () => {
  //   Meteor.logout();
  //   localStorage.removeItem("userToken");
  // };

  // const user = localStorage.getItem("userToken");
  // console.log(user);

  // let navButtons = (
  //   <Navbar title="MakeMyNote" style={{ padding: "8px" }}>
  //     <Button fill round style={{ width: "75px" }} href="/login" slot="right">
  //       Login
  //     </Button>
  //     <Button outline round style={{ width: "85px" }} href="/signup">
  //       Sign Up
  //     </Button>
  //   </Navbar>
  // );

  // if (user) {
  //   navButtons = (
  //     <Navbar title="MakeMyNote" style={{ padding: "8px" }}>
  //       <Button
  //         fill
  //         round
  //         style={{ width: "105px" }}
  //         href="/myposts"
  //         slot="right"
  //       >
  //         My Posts
  //       </Button>
  //       <Button
  //         outline
  //         round
  //         style={{ width: "85px" }}
  //         href="/login"
  //         slot="right"
  //         onClick={logoutUser}
  //       >
  //         Logout
  //       </Button>
  //     </Navbar>
  //   );
  // }

  return (
    <Page>
      {/* <Navigate /> */}
      <Nav />
      <PageContent>
        <Block>
          <NotesForm />
          <NotesList />
        </Block>
      </PageContent>
    </Page>
  );
};

export default Info;
