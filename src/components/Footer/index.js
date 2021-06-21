import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import "./style.css";

function Footer () {
    const start = moment();
    return (
        <footer id="footer-page">
        <p>React Portfolio template built by <a href="#">Wendy Uyen Vo</a> @<Moment date={start} format="YYYY" trim /></p>
        <p>
            <Link to="/home">Back to Home Page</Link>
        </p>
    </footer>
    )
}

export default Footer;