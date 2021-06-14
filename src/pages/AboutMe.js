import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import wendyAboutMe from "../assets/images/aboutmeBanner.png";
import PageLayout from "../components/PageLayout";


class AboutMe extends Component {
  render() {
    return(
        <PageLayout>
            {/* <div className="mdl-card__title">
                <h1 className="mdl-card__title-text">About</h1>
            </div> */}
            <div className="mdl-card__media">
                <img  src={wendyAboutMe} border="0" alt="aboutme" style={{height: "250px", width: "100%"}} />
            </div>

            <Grid>
                <h3 className="mdl-cell mdl-cell--12-col">About Me</h3>
                <div class="mdl-cell mdl-cell--8-col  no-padding ">
                    <p>
                    I am originally from Viet Nam and I have been in Australia for 7 years. Prior to my interest in coding, I was working different roles in hospitality, aged care and retail. After completing a Diploma of IT at RMIT in 2018, I gained a passion
                    to become a Web Developer. I am currently working full-time in the morning in which I complete my online studies during the night. It is a constant challenge to find a balance however I am certain my hard work and dedication will help
                    in achieving my goals in the future.
                    </p>
                </div>



{/* 
                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Irure mollit est sit labore</h3>

                <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                    <p>
                        Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                    </p>
                </div> */}
            </Grid>
        </PageLayout>
    );
  };
};

export default AboutMe;