import React from "react";
import Login from "../src/login";
import { connect } from "react-redux";
import { changeLoginState } from "./actions/actions";
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from "./dashboard";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.loginPage = <Login></Login>;
    this.dashboard = (
      <Dashboard></Dashboard>
    );
  }
  render() {
    this.landingPage = null;
    if (this.props.state.loginState === false) {
      this.landingPage = this.loginPage;
    } else this.landingPage = this.dashboard;
    return <div style={{height:"100%"}}>{this.landingPage}</div>;
  }
}
const mapStateToProps = state => {
  return {
    state: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeLoginState: loginState => {
      dispatch(changeLoginState(loginState));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
