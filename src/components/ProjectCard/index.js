import React from "react";
import {Card, CardText, CardTitle, CardActions, Button,Dialog, DialogTitle, DialogActions, DialogContent} from "react-mdl";
import "./style.css";
import {PoButtons, LinkButtons} from "../PoButtons";

    class ProjectCard extends React.Component {
        constructor(props) {
          super(props);
          this.state = {};
          this.handleOpenDialog = this.handleOpenDialog.bind(this);
          this.handleCloseDialog = this.handleCloseDialog.bind(this);
        }
        handleOpenDialog() {
            this.setState({
              openDialog: true
            });
          }
        
          handleCloseDialog() {
            this.setState({
              openDialog: false
            });
          }
        render() {
    return (
        <Card className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone portfolio-card" shadow={3} 
          >
            <div class="mdl-card__media" >
                        <img style={
                {
                    color: '#fff',
                    height: 'auto',
                    background: `url(${this.props.img}) center / cover`,
                    width: "100%"
                    
                }} src={this.props.img} border="0" alt="" />
            </div>
            <CardTitle className="cardTitle" 
            >{this.props.title}</CardTitle>
            <CardText>
                {this.props.description}
            </CardText>
            <CardActions border>
            <div>
        <PoButtons onPress={this.handleOpenDialog} btnText="Explore More" />
        <Dialog open={this.state.openDialog}>
          <DialogTitle>{this.props.title}</DialogTitle>
          <DialogContent>
            <h5 style={{fontStyle:"bold"}}>Technology used: </h5>
            <p>{this.props.tech}</p>
          </DialogContent>
          <DialogActions>
            <LinkButtons btnLink={this.props.demoLink} btnText="Live Demo" />
            <LinkButtons btnLink={this.props.gitHubLink} btnText="GitHub Link"  />
            <Button raised onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
            </CardActions>
           
        </Card>
        
    )
        }
}

export default ProjectCard;
