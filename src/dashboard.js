import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { connect } from "react-redux";
import { changeLoginState,toggleSideBar,toggleNavButton } from "./actions/actions";
import Profile from "./Profile";
import Files from "./files"
import QRScanner from "./QRScanner/qrscanner";
class Dashboard extends Component {
  render() {
    this.sideContent = null;
    switch(this.props.state.dashboardActiveButton){
        case 1:
            this.sideContent = <Profile/>
            break;
        case 2:
            this.sideContent = <Files/>
            break;
        case 3:
            this.sideContent = <QRScanner/>
            break;
    }
    this.scanner = (
   
        <NavItem eventKey="Scanner" onClick={()=>this.props.toggleNavButton(3)}>
            <NavIcon>
            <i
                className="material-icons md-light"
                style={{ verticalAlign: "middle", fontSize: "1.75em" }}
            >
                center_focus_strong
            </i>
            </NavIcon>
            <NavText>Scanner</NavText>
        </NavItem>
    
    );
    this.sideBarWidth = "64px";
    if(this.props.state.expanded === true) this.sideBarWidth = "240px";
    this.sideBarStyle={
        height: "100%",
        width: this.sideBarWidth,
        position: "fixed"
    }
    return (
    <div style={{width:"100%",height:"100%"}}>
    <div style={this.sideBarStyle}>
        <SideNav onSelect={selected => {}} onToggle={()=>this.props.toggleSideBar(!this.props.state.expanded)}>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="profile">
            
                <NavItem eventKey="profile" onClick={()=>this.props.toggleNavButton(1)}>
                    <NavIcon>
                     <i
                        className="material-icons md-light"
                        style={{ verticalAlign: "middle", fontSize: "1.75em" }}
                        >
                        person
                        </i>
                    </NavIcon>
                    <NavText>Profile</NavText>
                </NavItem>
                <NavItem eventKey="files" onClick={()=>this.props.toggleNavButton(2)}>
                    <NavIcon>
                        <i
                        className="material-icons md-light"
                        style={{ verticalAlign: "middle", fontSize: "1.75em" }}
                        >
                        insert_drive_file
                        </i>
                    </NavIcon>
                    <NavText>Track Files</NavText>
                </NavItem>
            
            {this.scanner}
            <NavItem
              eventKey="Logout"
              onClick={() => {this.props.changeLoginState(false)}}
            >
              <NavIcon>
                <i
                  className="material-icons md-light"
                  style={{ verticalAlign: "middle", fontSize: "1.75em" }}
                >
                  power_settings_new
                </i>
              </NavIcon>
              <NavText>Logout</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
      <div style={{height:"100%",width:"auto",marginLeft:this.sideBarWidth,paddingTop:"1px"}}> 
        {this.sideContent} 
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
const mapDispatchToProps = dispatch => {
  return {
    changeLoginState: loginState => {
      dispatch(changeLoginState(loginState));
    },
    toggleSideBar: expanded => {
        dispatch(toggleSideBar(expanded));
    },
    toggleNavButton: navButtonId => {
        dispatch(toggleNavButton(navButtonId))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
