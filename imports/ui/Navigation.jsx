import React from "react";
import AccountsUI from "./AccountsUI";

export default Navigate = () => {
  return (
    <header
      style={{
        display: "flex",
        padding: "30px 5%",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ea7300",
        color: "#f4f8ff",
      }}
    >
      <h2>MakeMyNote</h2>
      <nav>
        <ul>
          <li
            style={{
              display: "inline-block",
              padding: "0px 15px",
              marginRight: "130px",
            }}
          >
            <AccountsUI />
          </li>
        </ul>
      </nav>
    </header>
  );
};
