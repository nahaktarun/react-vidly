import React, { Component } from "react";
class LoginForm extends Component {
  // username = React.createRef();
  // state = {  }

  // componentDidMount() {
  //   this.username.current.focus();
  // }
  state = {
    account: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // const username = this.username.current.value;
    //call the server
    console.log("Submitted");
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
