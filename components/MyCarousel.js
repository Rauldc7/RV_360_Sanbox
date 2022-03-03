import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaptions,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardFooter,
  Row,
  Col,
  Button
} from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const items = [
  {
    src: "https://tourmkr.com/F1nXRql76p",
    altText: "Facebook",
    caption: "Fotografie 360 pentru social media"
  },
  {
    src: "https://tourmkr.com/F1nXRql76p",
    altText: "Tur Virtual",
    caption: "Tururi virtuale personalizate"
  },
  {
    src: "https://www.youtube.com/embed/Ki7IfrN2hD8",
    altText: "Video 360",
    caption: "Tururi 360 video"
  }
];
export default props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  var w100 = {
    width: "100%"
  };
  var w50 = {
    width: "50%"
  };
  var main = {};
  var textSlidesCss = {
    fontSize: "1.1em",
    // padding: "0.5em",
    marginTOp: "0",
    fontWeight: "bold",

    paddingTop: "0"
  };

  var styleRowSlideBottom = {
    padding: "0em",
    display: "flex",
    marginTop: "0em",
    paddingTop: "0em"
  };
  var styleColSlideBottom = {
    display: "flex",
    paddingRight: "2em",
    flexWrap: "nowrap",
    width: "100%"
  };
  // var buttonSlidesCss = {
  //   border: "0px!important",
  //   color: "white!important",
  //   marginRight: "7em",
  //   marginBottom: "1em"
  // };
  const slides = items.map(item => {
    return (
      <CarouselItem
        className="cItem"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {" "}
        <Card style={w100} className="carouselCard">
          <Row style={styleRowSlideBottom} className="carouselRowIframe">
            <iframe
              title={item.caption}
              width="100%"
              allowFullScreen
              src={item.src}
              className="frame"
            />
          </Row>
          <Row style={styleRowSlideBottom} className="carouselRowFooter">
            <Col style={styleColSlideBottom} className="carouselScris">
              <CardText className="textSlidesCss">{item.caption} </CardText>
            </Col>
            <Col className="buttonVeziFullColumn">
              <Button
                outline
                color="primary"
                key={item.src}
                className="buttonSlidesCss"
                href={item.src}
                target="_blank"
                size="lg"
              >
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                Vezi full-screen
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </Button>
            </Col>
          </Row>
        </Card>
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });
  return (
    <>
      <style>
        {`.frame {
          max-width: 100%;
          height: 19em;
          background: black;
        }
        .caruselulMeu {
          border: 0.25em solid #662d91 !important;
        }
        .carousel-control-prev, .carousel-control-next {     
          height: 18.9em;
          opacity: 1;margin:1em;
        }
        .carousel-control-next-icon {
          background-image: url("/static/greynext.svg");
          height:3em;
          width:3em;
          
          
        }
        
        .carousel-control-prev-icon {
          background-image: url("/static/leftdotts.svg");
          height:3em;
          width:3em;
        }

        .fa-angle-double-right {
          margin-left: 0.5em;
        }
        .fa-angle-double-left {
          margin-left: 1em;
          
        }

        .carouselRowFooter {
          
          
          width: 100%;
          height: 100%;
          // border: 0.1em solid #662d91 ;
           margin-left: 0em;
          margin-right: 0em;
          //  margin-bottom:3em;
           padding-bottom:1em;
        }
        .carouselScris {width: 50%;margin-right,margin-bottom: 0em; 
        }
        .carouselButon {width: 50%; margin-bottom,margin-right: 0em;
        }
        .btn.buttonSlidesCss {
          margin-right: 1em; 
          float: right; 
          margin-top: 0.5em; 
  
        
        }
        .textSlidesCss {  
          margin-right: 1em; 
          float: right;
          font-size: 1.1em; 
          padding: 0.5em; 
          font-weight:bold;
        }
        .carouselCard {
          padding-bottom: 1em;
        }
        .buttonVeziFullColumn {
          padding-bottom: 0em;
          
        }
        `}
      </style>
      <Carousel
        className="caruselulMeu"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        autoplay="false"
      >
        {/* <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      /> */}
        {slides}

        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          // className="carouselButonStanga"
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          // className="carouselButonDreapta"
        />
        <style global jsx>{``}</style>
      </Carousel>
    </>
  );
};
