import React from "react";
import ReactDOM  from "react-dom/client";

const Heading =()=> <h1> namaste react using jsx </h1>;

const FunctionalCmp = () => (
<div>
<Heading />
<Heading /></div>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalCmp/>);
