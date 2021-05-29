import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import profile from "../assets/images/profile.jpg";
import TypeText from "../components/Banner/TypeText"

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

                        <div className="landing-banner">
                            <h1 style={{ paddingBottom: 15 }} className="banner-text">
                            Hi There! <span className="wave">👋🏻</span> My name is <br/>
                             <strong className="my-name"> Wendy Uyen Vo</strong>
                            </h1>
                            <h2 className="banner-text">I'm a <strong style={{ padding: 50, textAlign: "center", color: "#d43843" }}>
                             <TypeText /></strong>
                            </h2>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    };
};


export default Home;
