import React from "react";
import ReactDOM from "react-dom/client"; 

const heading = React.createElement(
    "h1",
    {className: "head"},
    "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById('root'));  //Render Everything inside ROOT

console.log(heading); //OBJECT

root.render(heading);   // root.render(OBJECT) == TAGS

/** CREATING NESTED TAGS
 * 
 * <div id="parent">
 *     <div id="child1">
 *          <h1>H1 tag</h1>
 *          <h2>H2 tag</h2>
 *     </div>
 *     <div id="child2">
 *          <h1>H1 tag</h1>
 *          <h2>H2 tag</h2>
 *     </div>
 * </div>
 */

const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"H1 tag"),           //to give Sibling add an ARRAY of CHILDRENS
     React.createElement("h2",{},"H2 tag")]             
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"H1 tag"),           //to give Sibling add an ARRAY of CHILDRENS
 React.createElement("h2",{},"H2 tag")]             
)]
);

root.render(parent);