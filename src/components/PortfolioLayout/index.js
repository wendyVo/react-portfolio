import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import {Link} from "react-router-dom";

function PortfolioLayout(props) {
    return (
        <div >
    <Layout>
        <Header className="headerColor" title="My Portfolio" scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">Projects</Link>
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