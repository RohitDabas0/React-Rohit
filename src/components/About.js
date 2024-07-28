import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent componentDidMount");
  }

  render() {
    //  console.log("Parent Render");

    return (
      <div className="about">
        <h1>About</h1>
        {/* <User name={"rohit"} location={"Delhi"} contact={"nope"} /> */}
        <UserClass name={"First"} location={"Delhi"} contact={"nope"} />
      </div>
    );
  }
}

/**
 * -Parent Constructor
 * -Parent Render
 *
 *     Render Phase
 *   -First Child Constructor
 *   -First Child Render
 *
 *   -Second Child Constructor
 *   -Second Child Render
 *
 *     Commit Phase
 *   -First Child componentDidMount
 *   -Second Child ComponentDidMount
 *
 * -Parent componentDidMount
 */

export default About;
