import React, { Component } from "react";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <Page noToolbar noSwipeback loginScreen>
        <Navbar backLink="/">
          <NavLeft>MakeMyNote</NavLeft>
        </Navbar>
        <LoginScreenTitle>Create new account</LoginScreenTitle>
        <List form>
          <ListInput
            label="Username"
            type="text"
            placeholder="Your username"
            value={this.state.username}
            onInput={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
          <ListInput
            label="Password"
            type="password"
            placeholder="Your password"
            value={this.state.password}
            onInput={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </List>
        <List>
          <Button fill round onClick={this.signUp.bind(this)}>
            Sign Up
          </Button>
          <ListButton href="/login">Already have an account?</ListButton>
        </List>
      </Page>
    );
  }
  signUp() {
    const self = this;
    const app = self.$f7;
    const router = self.$f7router;
    Accounts.createUser(
      {
        username: self.state.username,
        password: self.state.password,
      },
      function (error) {
        if (error) {
          app.dialog.alert(error);
        } else {
          app.dialog.alert(`User created successfully!`, () => {
            localStorage.setItem("userToken", username);
            router.navigate("/mynotes");
          });
        }
      }
    );
    self.setState({ username: "", password: "" });
  }
}
