import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import {Link} from "react-router-dom";

function PortfolioLayout(props) {
    return (
        <div className="demo-big-content">
    <Layout>
        <Header className="headerColor" title="Title" scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            {props.children}
        </Content>
    </Layout>
</div>
    );
};


export default PortfolioLayout;