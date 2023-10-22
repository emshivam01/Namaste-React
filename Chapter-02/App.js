import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "io" }, "I'm a h1"),
    React.createElement("h1", { key: "po" }, "I'm a h2"),
  ])
);

const jsx = <h1 className="top-heading">This is written in jsx syntax</h1>;

console.log(parent);
console.log(jsx);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
