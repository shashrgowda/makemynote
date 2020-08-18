import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

// Import F7 CSS
import "../node_modules/framework7/css/framework7.bundle.css";

// Import F7 Bundle
import Framework7 from "framework7/js/framework7.bundle.js";

// Import F7-React Plugin
import Framework7React from "framework7-react/framework7-react.bundle";

import MainApp from "../imports/ui/MainApp";

// Init F7-React Plugin
Framework7.use(Framework7React);

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY",
});

Meteor.startup(() => {
  render(<MainApp />, document.getElementById("react-target"));
});
