import { Col, Row, Container } from "react-bootstrap";
import React from "react";
import { chunk } from "lodash";
import { Card } from "react-bootstrap";
import {Button} from '@material-ui/core'
class GridGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.colWidth = 3;
    
  }
  render() {
    this.rows = chunk(
      this.props.children,
      4
    );
    this.cardSubHeadingsStyle = {
      fontColor:"black",fontWeight:300,margin:"0",padding:"0"
    }
    console.log(22,this.props.children);
    this.page = null;
    if(this.props.children!=null)
      this.page = (<Container>
        {this.rows.map(cols => (
          <Row>
            {cols.map(col => (
              <Col sm={12} md={6}lg={this.colWidth}>
                  <Card style={{ margin: "10px", width: "auto" }}>
                    <Card.Body>
                      <div style={{display:"flex",width:"100%",margin:"0 auto",position:"relative"}}>
                        <i class="material-icons md-48"
                        style={{ verticalAlign: "middle",fontSize:"48px"}}>
                          query_builder
                        </i>
                        <div style={{width:"100%",verticalAlign:"middle"}}>
                          <div style={{margin:"10px"}}>
                          {col.ETA<0?"Delayed":col.stage==0?"Completed":Math.ceil(col.ETA)+" Days"}
                          </div>
                        </div>
                      </div>
                      <Card.Title style={{marginTop:"20px"}}>{col.filetype}</Card.Title>
                      <Card.Text style={this.cardSubHeadingsStyle}>
                        File ID : <b>{col.fileid}</b>
                      </Card.Text>
                      {col.stage==0?null:(<span><Card.Text style={this.cardSubHeadingsStyle}>
                        Current Stage: <b>{col.stage}</b>
                      </Card.Text>
                      <Card.Text style={this.cardSubHeadingsStyle}>
                        Total Stages: <b>12</b>
                      </Card.Text>
                      <Card.Text style={this.cardSubHeadingsStyle}>
                        Current Department : <b>{col.currdeptid}</b>
                      </Card.Text></span>)
                      } 
                      <Button color="secondary" variant="outlined" style={{marginTop:"10px",marginLeft:"0"}}>Track</Button>
                    </Card.Body>
                  </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>);
    return this.page;
  }
}

export default GridGenerator;
