import React, {useState} from 'react';
import {
    Grid,
    Cell
} from 'react-mdl';
import profile from "../assets/images/profile.jpg";
import PageLayout from "../components/PageLayout";


const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
        return (
            <PageLayout>
                <div className="contact-body">
                    <Grid className="contact-grid">
                        <Cell col={6}>
                            {/* <h2>Wendy Uyen Vo</h2>
                            <img src={profile}
                                alt="avatar"
                                style={
                                    {height: '250px'}
                                }/> */}
                                <a href="https://www.animatedimages.org/cat-sms-and-text-messages-630.htm"><img src="https://www.animatedimages.org/data/media/630/animated-sms-and-text-message-image-0033.gif" border="0" alt="animated-sms-and-text-message-image-0033" /></a>
                            <p style={
                                {
                                    width: "75%",
                                    margin: "auto",
                                    paddingTop: "1em",
                                    fontSize: "2em"
                                }
                            }>Send Me a Message if you have any queries</p>

                            
                        </Cell>
                        <Cell col={6}>
                            {/* <h2>Contact Me</h2>
                            <hr/> */}

                            <form class="form" onSubmit={handleSubmit}>
                                <h2 className="formTitle">CONTACT ME</h2>
                                <div>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" placeholder="Write your name here.." required></input>
                                </div>
                                <p type="Email:">
                                    <input id="email" required  placeholder="Let me know how to contact you back.."></input>
                                </p>
                                <p type="Message:">
                                    <input  id="message"  placeholder="Please write your message here.."></input>
                                </p>
                                <button className="contactBtn">{status}</button>
                                {/* <div className="contactInfo">
    <span class="fa fa-phone"></span>001 1023 567
    <span class="fa fa-envelope-o"></span> contact@company.com
  </div> */} </form>
                        </Cell>
                    </Grid>
                </div>
            </PageLayout>
        )
}

export default Contact;
