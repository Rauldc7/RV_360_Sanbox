import { Card, Button } from "reactstrap";
import { FiFacebook, FiYoutube, FiPhoneOutgoing } from "react-icons/fi";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
export default props => {
  return (
    <footer className="footer-distributed">
      <style>
        {`
        footer{
          margin-top:3em;
          margin-bottom: 0em;
            bottom: 0;
            width: 100%;
            
            z-index: 6;
     
        }
        .buttonsFooter {
          margin: 0.5em;
          border: 0em !important;
          background: black !important;
        }
        .footerContent {
          list-style:none;
          width: 100%;
          background: white;
          // margin-right: 3em;
          padding: 0;
          
        }
        .footerSection {
          display: inline-block; /* Get all images to show in a row */
          width: 33%;            /* Show 3 logos per row */
          text-align: center;    /* Centre align the images */
     
        }
   
        @media (max-width: 960px) and (min-width: 501px) {
          .footerSection { width: 33%; } /* Show 2 logos per row on medium devices (tablets, phones in landscape) */
        }
        @media all and (max-width: 480px) { 
          .footerSection { width: 33%; } 
          }
        @media (max-width: 500px) {
          .footerSection { width: 33%;; } /* On small screens, show one logo per row */
        }

        .fa {
          
          border-radius: 50%;
          background: red;

        }
      `}
      </style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <ul className="footerContent">
        <li className="footerSection inline-b-item">
          <div className="facebook socialButton">
            <a href="http://m.me/imobiliar360" target="_blank">
              <IoLogoFacebook
                className="socialIcon"
                size="5em"
                color="#4267B2"
              />{" "}
            </a>
          </div>
        </li>
        <li className="footerSection inline-b-item">
          <div className="whatsapp socialButton">
            <a href="https://wa.me/40773325312" target="_blank">
              <IoLogoWhatsapp
                className="socialIcon"
                color="#25D366"
                size="5em"
              />
            </a>
          </div>
        </li>
        <li className="footerSection inline-b-item">
          <div className="telefon socialButton" target="_blank">
            <a href="tel:+40773325312">
              <AiFillPhone
                className="socialIcon"
                size="5em"
                color="#898F9C
"
              />{" "}
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
};
