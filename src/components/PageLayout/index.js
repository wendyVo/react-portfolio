import React from "react";
import {Grid, Cell} from "react-mdl";


function PageLayout(props) {
  return (
    <Grid className="pageLayout">
        <Cell col={12} shadow={4} style={{margin:"10px 30px 10px 30px", backgroundColor:"#FFF0F5"}} >
            {props.children}
        </Cell>
    </Grid> 
  );
}

export default PageLayout;