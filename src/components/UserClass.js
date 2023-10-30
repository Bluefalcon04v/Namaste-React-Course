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
    console.log("Constructor")
  }

  async componentDidMount(){
    const data = await fetch("  https://api.github.com/users/Bluefalcon04v")
    const json = await data.json();
    console.log(json)
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
        {console.log("Render")}
        User Class Component  
        <img src={this.state.userInfo.avatar_url} alt="Image"/>
        <p>{this.state.userInfo.name}</p>
        <p>{this.state.userInfo.company}</p>
      </div>
    );
  }
}

export default UserClass;


/*
The Way all methods are being called 
Constructor
Render 

Api calls 
then render with new datas 

Component is updated

Component is unmounted

*/