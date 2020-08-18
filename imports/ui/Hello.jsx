import React from "react";

const Hello = () => {
  return (
    <Page pageContent={false}>
      <Navbar backLink="back">
        <NavLeft>Hello</NavLeft>
      </Navbar>
      <PageContent>
        <h1>Hello Page</h1>
      </PageContent>
    </Page>
  );
};

export default Hello;
