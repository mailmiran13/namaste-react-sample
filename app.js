// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "hello world from react js file!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// <div id = "parent">
//     <div id = "child">
//         <h1>tag 1</h1>
//         <h1>tag 2</h1>
//     </div>
// </div>

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "tag 1"),
        React.createElement("h1", {}, "tag 2")])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);