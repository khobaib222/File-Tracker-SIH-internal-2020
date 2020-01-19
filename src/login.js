import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter
} from "mdbreact";
import Popup from 'reactjs-popup'
import { connect } from "react-redux";
import { changeLoginState, inputID, inputPassword, setEmployeeDetails } from "./actions/actions";
const axios = require("axios");
const qs = require('qs');
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {open:false};
    this.openPopUp = this.openPopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }
  openPopUp(){
    this.setState({open:true});
  }
  closePopUp(){
    this.setState({open:false});
  }
  verifyCredentials = () => {
    axios
      .post(
        "http://172.16.195.6:3000/login",
        qs.stringify({'id': this.props.state.emp_ID,'password':this.props.state.password})
        ,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((response) =>{
        if(response.data.status=="Success"){
          this.props.setEmployeeDetails(response.data.details);
          this.props.changeLoginState(true);
        } 
        else this.openPopUp();
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
      <MDBContainer style={{ verticalAlign: "middle", marginTop: "50px" }}>
        <MDBRow>
          <MDBCol md="4" style={{ margin: "auto" }}>
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">Log in</h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput
                  label="Your ID"
                  group
                  type="text"
                  validate
                  onChange={event => this.props.inputID(event.target.value)}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={event =>
                    this.props.inputPassword(event.target.value)
                  }
                />
                <p className="font-small grey-text d-flex justify-content-end">
                  Forgot
                  <a href="#!" className="dark-grey-text font-weight-bold ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-4 mt-5">
                  <MDBBtn
                    onClick={() => this.verifyCredentials()}
                    color="danger"
                    type="button"
                    className="btn-block z-depth-2"
                  >
                    Log in
                  </MDBBtn>
                </div>
                <p className="font-small grey-text d-flex justify-content-center">
                  Don't have an account?
                  <a href="#!" className="dark-grey-text font-weight-bold ml-1">
                    Sign up
                  </a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Popup
      open={this.state.open}
      closeOnDocumentClick
      onClose={this.closePopUp}
      style={{height:"100px",width:"100px"}}
    >
      <div style={{height:"100%",width:"100%",verticalAlign:"middle"}}>
        <a className="close" onClick={this.closePopUp}>
          &times;
        </a>
        <div style={{height:"100%",width:"100%"}}>
        <p style={{width:"auto"}} >
          <text>Invalid Credentials</text>
        </p>
        </div>
      </div>
    </Popup>
    </div>
    );
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
    },
    inputID: result => {
      dispatch(inputID(result));
    },
    inputPassword: result => {
      dispatch(inputPassword(result));
    },
    setEmployeeDetails: object => {
      dispatch(setEmployeeDetails(object));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
