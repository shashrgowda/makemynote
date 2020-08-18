import React from "react";
import routes from "./routes.js";
import Login from "./Login";

const f7params = {
  id: "io.framework7.testapp",
  name: "MakeMyNote",
  theme: "auto",
  routes,

  statusbar: {
    iosBackgroundColor: "#ffffff",
    androidBackgroundColor: "#ffffff",
    transition: "400ms",
  },

  view: {
    iosDynamicNavbar: false,
    pushState: true,

    pushStateSeparator: "",
    routableModals: true,

    iosSwipeBack: false,
  },

  input: {
    scrollIntoViewOnFocus: true,
    scrollIntoViewAlways: true,
    scrollIntoViewCentered: true,
  },
  panel: {
    swipe: "both",
  },
  picker: {
    rotateEffect: true,
    openIn: "sheet",
  },
  autocomplete: {
    openIn: "dropdown",
    animate: false,
  },
  touch: {
    activeState: true,
  },
};

const MainApp = () => {
  return (
    <App params={f7params}>
      <View>
        <Login />
      </View>
    </App>
  );
};

export default MainApp;
