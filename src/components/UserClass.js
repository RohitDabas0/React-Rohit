import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: "dumm",
      },
    };

    //console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "child ComponentDidMount");
    //API CALL
    const data = await fetch("https://api.github.com/users/RohitDabas0");
    const json = await data.json();

    this.setState({
      userData: json,
    });
  }

  render() {
    //console.log(name + "child Render");

    const { login, id } = this.state.userData;

    return (
      <div className="user-card">
        <h2>{login}</h2>
        <h3>{id}</h3>
        <h3></h3>
      </div>
    );
  }
}

export default UserClass;
