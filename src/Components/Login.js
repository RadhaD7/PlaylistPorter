import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onLogin = (ev) => {};
  render() {
    return (
      <div className="form-group">
        <div className="input-wrapper">
          <label for="userId" className="form-label">
            Username
            <input id="userId" type="text" className="form-control" />
          </label>
        </div>
        <div className="input-wrapper">
          <label for="password" className="form-label">
            Password
            <input id="password" type="text" className="form-control" />
          </label>
        </div>
        <button type="submit" className="btn">
          Click to Login
        </button>
      </div>
    );
  }
}
export default Login;
