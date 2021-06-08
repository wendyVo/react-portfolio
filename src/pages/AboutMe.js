import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class AboutMe extends Component {
  render() {
    return(
        <Grid>

        <Cell col={12} className="mdl-shadow--4dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">About</h2>
            </div>
            <div class="mdl-card__media">
                <img class="article-image" src=" images/about-header.jpg" border="0" alt="" />
            </div>

            <div class="mdl-grid portfolio-copy">
                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>
                <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                    <p>
                        Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                    </p>
                </div>




                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Irure mollit est sit labore</h3>

                <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                    <p>
                        Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                    </p>
                </div>
            </div>
        </Cell>


    </Grid>
      
    )
  }
}

export default AboutMe;