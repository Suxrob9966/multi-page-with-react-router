import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new User!</p>
      </Route>
    </section>
  );
};

export default Welcome;
