import React from "react";

class UserClass extends React.Component {
    render(props){ // Using Props in class based components 
        return(
            <div className="userCard">
            User Class Component
            <h3>Name = {this.props.name}</h3>
            <h3>Occupation = {this.props.occupation}</h3>
            <h3>City Name = {this.props.city}</h3>
          </div>    
        )
    }
}

export default UserClass;