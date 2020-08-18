import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  submit() {
    const self = this;
    const app = self.$f7;
    const router = self.$f7router;
    const username = self.state.username;
    const password = self.state.password;
    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        app.dialog.alert(`Incorrect Username/Password`);
      } else {
        localStorage.setItem("userToken", username);
        router.navigate("/mynotes");
      }
    });
  }

  render() {
    return (
      <Page noToolbar noSwipeback loginScreen>
        <Navbar>
          <NavLeft>MakeMyNote</NavLeft>
        </Navbar>
        <LoginScreenTitle>Login</LoginScreenTitle>
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
          <Button fill round onClick={this.submit.bind(this)}>
            Sign In
          </Button>
          <ListButton href="/signup">Create new account</ListButton>
        </List>
      </Page>
    );
  }
}
