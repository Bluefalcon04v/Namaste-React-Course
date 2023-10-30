import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        avatar_url: "image",
        name: "Default",
        company: "Default-Company",
      }
    };
  }

  async componentDidMount(){
    const data = await fetch("  https://api.github.com/users/Bluefalcon04v")
    const json = await data.json();
    this.setState({
      userInfo: json
    })
  }

  componentDidUpdate(){
    console.log("Component is Updated")
  }

  componentWillUnmount(){
    console.log("Component is Unmounted")
  }

  render() {
    return (
      <div className="userCard">
        User Class Component  
        <img src={this.state.userInfo.avatar_url} alt="Image"/>
        <p>{this.state.userInfo.name}</p>
        <p>{this.state.userInfo.company}</p>
      </div>
    );
  }
}

export default UserClass;