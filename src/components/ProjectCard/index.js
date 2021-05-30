import React from "react";
import {Card, CardText} from "react-mdl";

function ProjectCard(props) {
    return (
        <Card shadow={0}
            style={
                {
                    width: '512px',
                    margin: 'auto'
                }
        }>
            <CardTitle style={
                {
                    color: '#fff',
                    height: '176px',
                    background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'
                }
            }>{props.title}</CardTitle>
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
