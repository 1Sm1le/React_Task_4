import React, { Component } from "react";

class UserLogin extends Component {
  state = {
    text: "Login",
    subscribed: false
  };
  click = (event) => {
    this.setState({ text: "Submitted", subscribed: !this.state.subscribed });
    console.log(this.state);
  };

  render() {
    let classname = "Sign_in_button";
    if (this.state.text === "Submitted") {
      classname = "submit";
    }
    if (this.state.text === "Login") {
      console.log("For e-mail: Only .ru domains are allowed.");
      console.log("For password: At least 8 characters");
    }
    
    return (
      <div>
        <label htmlFor="name">Your login:</label>
        <input type="email" name="email"></input>
        <br></br>
        <label htmlFor="password">Your password:</label>
        <input type="password" name="password"></input>
        <br></br>
        <button className={classname} type="submit" onClick={this.click}>
          {this.state.text}
        </button>
      </div>
    );
  }
}
export default UserLogin;
