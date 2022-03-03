import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardGroup,
  CardFooter,
  CardHeader,
  CardDeck,
  Spinner,
  Row,
  Col,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { FaTelegramPlane, FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
class MyContact2 extends Component {
  // const submit = () => {
  //   alert("mue");
  // };
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "<YOUR_EMAIL_ID>",
      subject: subject,
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_euPAJuu6",
      templateParams,
      "user_PGHvjZ4KH8yjA9uhzU0Fo"
    );
    alert("Mesaj trimis! Multumim " + name + " Te vom contacta in curand!");
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div className="main">
        <style>
          {`
            .grupContact {
              padding: 2em;
              height: 29em;
              border: 0.25em dotted  #662d9124  !important;
              margin: 1.5em;
              height:90%;
          }
     
            
            // .main {
            //   height: 100%;
            //   margin-top: 0px;
            //   margin-left: 20px;
            //   margin-right: 20px;
            //   min-height: 65vh;
            // }
            .card-title {
              line-height: 2em;
              padding-left: 1.7em;
              
              padding-top: 2em;
              font-weight: bold;
              font-size: 1.3em;
   
            }
            .card-text {
           
              height: 100%;
              border-radius: 25px;
              margin-right: 1em;
              margin-left: 1em;
              margin-bottom: 1em;
              line-height: 2em;
              padding-left: 1em;
              padding-right: 1em;
              padding-bottom: 2em;
              padding-top:2em;
              overflow:hidden; 
              background: white;
              color: black  ;
              
            }
            .card-footer {   position: absolute;
              bottom: 0;   right: 0; left: 0;
              width="100%"}
            p {
              
              padding-bottom: 2em;
              padding-top:2em;
            }
            .footerText {
              padding-bottom: 0em ;
              padding-top:0em ; 
            }
            .butonFireContact {
              margin: 0.5em;
            }
            .liniePreturi {
              font-weight: bold;
            
            }
            .card-text {
           
            }
            .card-body {
              
              padding-bottom:2em;
            }
            
            .socialButton {
              padding: 1em;
            }

            .socialNetworks {
              padding-left:0em;
              padding-top: 0em;
              height: 4.5em;
              left: 0;
              display: inline-flex;  
              padding-bottom: 5.3em;
            }
            
          
            .socialIcon {
              padding: 0.3em;
              margin-top:0.2em;
              margin-right:0.2em;
            }

            .whatsapp {
              padding-left: 0px;
            }
            
            .sendButton {
              padding-left: 2em !important;
              padding-right: 2em !important;
              padding-top: 0.239em !important;
              padding-bottom: 0.1em !important;
              font-size: 1rem !important;
              font-weight: bold !important;
              cursor: pointer;
            }

            .sendButton svg {
              vertical-align: middle;
              margin-bottom: 0m;
              margin-left: 0.3em;
            }
        
        `}
        </style>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        />
        <div className="grupContact">
          <div className="formular">
            <h4>@email</h4>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup controlId="formBasicEmail">
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "email")}
                  placeholder="email"
                />
              </FormGroup>
              <FormGroup controlId="formBasicName">
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "name")}
                  placeholder="nume/firma"
                />
              </FormGroup>

              <FormGroup controlId="formBasicMessage">
                <Input
                  placeholder="Mesaj"
                  type="textarea"
                  name="message"
                  className="text-primary"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, "message")}
                />
              </FormGroup>
              <Button className="sendButton" outline color="primary">
                Trimite <FaTelegramPlane size="2em" />
              </Button>
            </Form>
          </div>

          <div className="socialNetworks">
            <div className="whatsapp socialButton">
              <a href="https://wa.me/40773325312" target="_blank">
                <IoLogoWhatsapp
                  className="socialIcon"
                  color="#25D366"
                  size="3em"
                />
              </a>
            </div>
            <div className="facebook socialButton">
              <a href="http://m.me/imobiliar360" target="_blank">
                <IoLogoFacebook
                  className="socialIcon"
                  size="3em"
                  color="#4267B2"
                />{" "}
              </a>
            </div>
            <div className="telefon socialButton" target="_blank">
              <a href="tel:+40773325312">
                <AiFillPhone
                  className="socialIcon"
                  size="3em"
                  color="#898F9C
"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyContact2;
