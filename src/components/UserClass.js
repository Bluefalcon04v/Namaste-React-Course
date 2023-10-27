import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  // Setting multiple States
      value: 0,
      value2: 2,
    };
  }
  render() {
    return (
      <div className="userCard">
        User Class Component
        <h3>Name = {this.props.name}</h3>
        <h3>Occupation = {this.props.occupation}</h3>
        <h3>City Name = {this.props.city}</h3>
        <p>{this.state.value}</p>
        <p>{this.state.value2}</p>

        <button
          onClick={() => {
            this.setState({
              value: 1,
              value2: 7,
            });
          }}
        >
          Class Component
        </button>
      </div>
    );
  }
}

export default UserClass;
