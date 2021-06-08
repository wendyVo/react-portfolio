import React from "react";
import {Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton, Cell} from "react-mdl";
import "./style.css";

function ProjectCard(props) {
    return (
        // <Cell col={4} phone={12}>
        <Card className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone" shadow={3} 
          >
            <div class="mdl-card__media" >
                        <img style={
                {
                    color: '#fff',
                    height: 'auto',
                    background: `url(${props.img}) center / cover`,
                    width: "100%"
                    
                }} src={props.img} border="0" alt="" />
            </div>
            <CardTitle className="cardTitle" 
            // style={
            //     {
            //         color: '#fff',
            //         height: '176px',
            //         background:    `url(${props.img}) center / cover`
            //     }
            >{props.title}</CardTitle>
            <CardText>
                {props.description}
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={
                {color: '#fff'}
            }>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
        
    )
}

export default ProjectCard;
