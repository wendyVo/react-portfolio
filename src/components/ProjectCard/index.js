import React from "react";
import {Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton, Dialog, DialogTitle, DialogActions, DialogContent} from "react-mdl";
import "./style.css";

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
        // <Cell col={4} phone={12}>
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
            // style={
            //     {
            //         color: '#fff',
            //         height: '176px',
            //         background:    `url(${props.img}) center / cover`
            //     }
            >{this.props.title}</CardTitle>
            <CardText>
                {this.props.description}
            </CardText>
            <CardActions border>
            <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Explore More</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>{this.props.title}</DialogTitle>
          <DialogContent>
            <h5 style={{fontStyle:"bold"}}>Technology used: </h5>
            <p>{this.props.tech}</p>
          </DialogContent>
          <DialogActions>
            <Button type='button'><a href={this.props.demoLink} target="_blank">Live Demo</a></Button>
            <Button type='button'><a href={this.props.gitHubLink} target="_blank">GitHub Link</a></Button>
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
            </CardActions>
           
        </Card>
        
    )
        }
}

export default ProjectCard;
