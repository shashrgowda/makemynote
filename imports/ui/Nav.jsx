import React from "react";

export default Nav = () => {
  const user = localStorage.getItem("userToken");

  const logoutUser = () => {
    Meteor.logout();
    localStorage.removeItem("userToken");
  };

  let navButtons = (
    <Navbar title="MakeMyNote" style={{ padding: "8px" }}>
      <Button fill round style={{ width: "75px" }} href="/login" slot="right">
        Login
      </Button>
      <Button outline round style={{ width: "85px" }} href="/signup">
        Sign Up
      </Button>
    </Navbar>
  );

  if (user) {
    navButtons = (
      <Navbar title="MakeMyNote" style={{ padding: "8px" }}>
        <Link href="/mynotes" slot="right" tabLinkActive="true">
          My Notes
        </Link>
        <Link href="/myposts" slot="right">
          My Posts
        </Link>
        <Button
          outline
          round
          style={{ width: "85px" }}
          href="/login"
          slot="right"
          onClick={logoutUser}
        >
          Logout
        </Button>
      </Navbar>
    );
  }

  return <div>{navButtons}</div>;
};
