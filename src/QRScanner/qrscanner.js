import React from "react";
import { Cameras, Scanner } from "react-instascan";
import { connect } from "react-redux";
import { changeQRresult } from "../actions/actions";
const axios = require("axios");
const qs = require("qs");
class QRScanner extends React.Component {
  sendQRResult = result => {
    this.props.changeQRresult(result);
    axios
      .post(
        "http://172.16.195.6:3000/qr",
        qs.stringify({ code: result, empid: this.props.state.emp_ID }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div style={{ height: "100%", textAlign: "center" }}>
        <Cameras>
          {cameras => (
            <div
              style={{
                width: "fit-content",
                margin: "auto",
                marginTop: "50px"
              }}
            >
              <h1>
                <b>Scan QR code</b>
              </h1>
              <Scanner
                camera={cameras[0]}
                onScan={res => this.sendQRResult(res)}
              >
                <video style={{ width: 400, height: 400 }} />
              </Scanner>
              <br />
              {this.props.state.QRresult}
            </div>
          )}
        </Cameras>
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
    changeQRresult: result => {
      dispatch(changeQRresult(result));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QRScanner);
