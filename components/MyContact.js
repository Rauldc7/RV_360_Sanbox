// import React, { Component } from "react";
// import * as emailjs from "emailjs-com";
// import { FaTelegramPlane, FaPhoneSquareAlt } from "react-icons/fa";
// import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";
// import { AiFillPhone } from "react-icons/ai";
// import {
//   Button,
//   FormFeedback,
//   Form,
//   FormGroup,
//   Label,
//   Input
// } from "reactstrap";
// class MyContact extends Component {
//   state = {
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   };
//   handleSubmit(e) {
//     e.preventDefault();
//     const { name, email, subject, message } = this.state;
//     let templateParams = {
//       from_name: email,
//       to_name: "<YOUR_EMAIL_ID>",
//       subject: subject,
//       message_html: message
//     };
//     emailjs.send(
//       "gmail",
//       "template_euPAJuu6",
//       templateParams,
//       "user_PGHvjZ4KH8yjA9uhzU0Fo"
//     );
//     alert("Mesaj trimis! Multumim " + name + " Te vom contacta in curand!");
//     this.resetForm();
//   }
//   resetForm() {
//     this.setState({
//       name: "",
//       email: "",
//       subject: "",
//       message: ""
//     });
//   }
//   handleChange = (param, e) => {
//     this.setState({ [param]: e.target.value });
//   };
//   render() {
//     return (
//       <div className="contactContent">
//         <style>{`
//         .formular {

//         }
//           .sendButton {
//             padding-left: 2em;
//             padding-right: 2em;
//             padding-top: 0.239em;
//             padding-bottom: 0.1em;
//             font-size: 1rem !important;

//             cursor: pointer;
//           }
//           .sendButton svg {
//             vertical-align: middle;
//             margin-bottom: 0m;
//             margin-left: 0.3em;
//           }
//           .contactContent {
//             padding: 2em;

//           }
//           .socialNetworks {
//             display: inherit;
//           }
//           .form {
//           }
//           .contactWrapper {
//             border: 0.125em solid #662d91 !important;
//             width: 100%;
//             display: inline-block;
//             height: 100%;
//             padding-left: 0px;
//           }
//           .contactColumn {

//             vertical-align: middle;
//             display: inline-block; /* Get all images to show in a row */
//             width: 50%; /* Show 3 logos per row */
//             padding: 1.5em;
//             text-align: center; /* Centre align the images */

//           }
//           .socialNetworks {
//             display: inline-flex;

//           }
//           .socialNetworks svg {
//             cursor: pointer;
//           }
//           @media (max-width: 960px) and (min-width: 1224px) {
//             .contactColumn {
//               width: 50%;
//             } /* Show 2 logos per row on medium devices (tablets, phones in landscape) */

//           }
//           @media all and (max-width: 480px) {
//             .contactColumn {
//               width: 50%;
//             }
//             .socialNetworks {
//               display: inherit;
//               margin-left: 1em;
//             }
//           }
//           @media (max-width: 1220px) {
//             .contactColumn {
//               width: 100%;
//             } /* On small screens, show one logo per row */
//             .socialNetworks {
//               display: flex;
//               margin-top: 1em;
//             }

//           }// Extra large devices (large desktops, 1200px and up)

//           h5,h4,
//           h3,h2,h1 {
//             margin-bottom: 2em;
//             margin-top: 0.5em;
//             margin-right: 0em;
//             font-size: 1.5em;
//             line-height: 2em;
//             margin-left: 1.1em;
//             // letter-spacing: 0.025em;
//             font-weight: bold;
//           }

//           }
//           .socialIcon {
//             font-size: 60px;

//           }
//           .title {
//             margin-top: 1em;
//             margin-left: 1em;
//             height: 1.2em;
//             text-color: white;
//             color: #673AB7;
//             padding-left: 0.1em;
//           }
//         `}</style>

//         <ul className="contactWrapper">
//           <h4 className="title">Trimite-ne un mesaj</h4>
//           <li className="contactColumn formular ">
//             <Form onSubmit={this.handleSubmit.bind(this)}>
//               <FormGroup controlId="formBasicEmail">
//                 <Input
//                   type="email"
//                   name="email"
//                   value={this.state.email}
//                   className="text-primary"
//                   onChange={this.handleChange.bind(this, "email")}
//                   placeholder="email"
//                 />
//               </FormGroup>
//               <FormGroup controlId="formBasicName">
//                 <Input
//                   type="text"
//                   name="name"
//                   value={this.state.name}
//                   className="text-primary"
//                   onChange={this.handleChange.bind(this, "name")}
//                   placeholder="nume/firma"
//                 />
//               </FormGroup>

//               <FormGroup controlId="formBasicMessage">
//                 <Input
//                   placeholder="Mesaj"
//                   type="textarea"
//                   name="message"
//                   className="text-primary"
//                   value={this.state.message}
//                   onChange={this.handleChange.bind(this, "message")}
//                 />
//               </FormGroup>
//               <Button className="sendButton" outline color="primary">
//                 Trimite <FaTelegramPlane size="2em" />
//               </Button>
//             </Form>
//           </li>
//           <li className="contactColumn socialNetworks">
//             <div className="whatsapp">
//               <a href="https://wa.me/40773325312" target="_blank">
//                 <IoLogoWhatsapp
//                   className="socialIcon"
//                   color="#25D366"
//                   size="5em"
//                 />
//               </a>
//             </div>
//             <div className="facebook">
//               <a href="http://m.me/imobiliar360" target="_blank">
//                 <IoLogoFacebook
//                   className="socialIcon"
//                   size="5em"
//                   color="#4267B2"
//                 />{" "}
//               </a>
//             </div>
//             <div className="telefon" target="_blank">
//               <a href="tel:+40773325312">
//                 <AiFillPhone
//                   className="socialIcon"
//                   size="5em"
//                   color="#898F9C
// "
//                 />{" "}
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
// export default MyContact;
