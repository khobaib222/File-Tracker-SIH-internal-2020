import React from "react";
import Avatar from 'react-avatar';
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import {Button} from "@material-ui/core"
class Profile extends React.Component {
  render() {
    return (
      <div style={{ height: "100%",marginTop:"16px"}}>
        <Avatar style={{marginLeft:"20px",border:"3px solid red"}}color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="200" round={true} src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" />
        <div style={{textAlign: "left"}}>
          
          <Table>
            <tr>
              <td >
                <b>Name:</b> {this.props.state.emp_name}
              </td>
              <td>
                <b>Employee Id:</b> {this.props.state.emp_ID}
              </td>
            </tr>
            <tr>
              <td>
                <b>Email:</b> {this.props.state.email}
              </td>
              <td>
                <b>Phone No.:</b> 7294953113
              </td>
            </tr>
              
            <tr>
              <td>
                <b>Department ID:</b> {this.props.state.emp_dept_id}
              </td>
              <td>
                <b>Position:</b> HOD
              </td>
            </tr>
            
          </Table>
          
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{width:"fit-content",margin:"auto"}}>
            <Button variant="contained" color="secondary" disableElevation style={{margin:"10px"}}>Update Details</Button>
            <Button variant="contained" color="secondary" disableElevation style={{margin:"10px"}}>Change Password</Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(mapStateToProps,null)(Profile);
