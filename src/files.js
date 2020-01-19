import React from "react";
import {connect} from "react-redux";
import GridGenerator from "./GridGenerator";
const axios = require("axios");
const qs = require('qs')
const details = {
  type: "Bonafide",
  eta: 1234,
  totalStages: 12,
  currentStage: 5,
  currentDepartment: "Medical"
};
class Files extends React.Component {
  setFilesArray = (response) => {
    console.log(response.data)
    this.setState({
      filesArray: response.data
    })
  }
  constructor(props){
    super(props);
    this.state = {
      filesArray: null
    };
    axios.post("http://172.16.195.6:3000/history", 
    qs.stringify({ 'empid': this.props.state.emp_ID }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
    .then(response => this.setFilesArray(response))
    .catch(function(error) {
      console.log(error);
    });
  }
  render() {
    console.log(this.props.state.emp_ID);
    
    return (
      <div
        style={{
          height: "100%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <GridGenerator children={this.state.filesArray} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(mapStateToProps, null)(Files);
