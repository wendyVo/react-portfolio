import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import profile from "../assets/images/profile.jpg";

class Home extends Component {
    render() {
        return (
            <div style={
                {
                    width: "100%",
                    margin: "auto"
                }
            }>
                <Grid className="landing-page">
                    <Cell col={12}>
                        <div className="circular--portrait">
                            <img src={profile} alt="profile"/>
                        </div>

                            <div className="landing-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    };
};


export default Home;
