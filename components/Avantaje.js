import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import CheltuieliSVG from "./CheltuieliSVG";
import ExpunereSVG from "./ExpunereSVG";
import VanzariSVG from "./VanzariSVG";
import React from "react";

export default props => {
  return (
    <>
      <style global jsx>{`
        .lineheight2em {
          line-height: 2em;
          font-size: 1.15em;
        }
        .col {
          margin-top: 1em;
        }
        .btn {
          // border: 0px solid #6c63ff !important;
          // background: #6c63ff !important;
          // font-color: white !important;
          // color: white !important;
          // font-weight: bold !important;
        }
        div .centrd {
          text-align: center;
          width: 100%;
        }
        .cardsContainer {
          display: inline-block;
          height: 100%;
          margin-top: 0px;
          margin-left: 20px;
          margin-right: 20px;
          min-height: 65vh;
          max-width: 35em;
          min-width: 15em;
        }
        .cardTitle h1 {
          margin-bottom: 3em;
          font-size: 1.1em;
          font-weight: 800;
        }
        .cardPrincipal {
          margin-top: 20px;
          margin-bottom: 1em;
          padding: 0.5em;
          height: 100%;
        }
        .card-title {
          margin-bottom: 2rem !important;
        }

        .blueviolet {
          border: 0.5em solid #662d91 !important;
        }

        .greens {
          border: 0.5em solid #31be44 !important;
        }
        .reds {
          border: 0.5em solid #f15b21 !important;
        }
        .collapse {
          margin-top: 20px;
        }
        .svg-inline--fa {
          margin-right: 10px;
        }
        .footerContent {
          margin-top: 1em;
        }
        @media (min-width: 1600px) {
          .cardsContainer {
            display: inline-flex;
            min-width: 100em;
            height: 48.5em;
            min-width: 96em;
            margin-bottom: 3em;
          }
          .cardPrincipal {
            margin: 1em;
            width: 33%;
            padding: 1em;
            font-size: 1.1em;
            font-weight: 500;
          }
          .lineheight2em {
          }
        }
      `}</style>
      <div className="centrd">
        <div className="cardsContainer">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          />
          <Card className="blueviolet cardPrincipal">
            <CardBody>
              {" "}
              <ExpunereSVG />
              <CardTitle>
                <h1 className="titluAvantajCard">Expunere ridicată</h1>
              </CardTitle>
              <CardText className="lineheight2em">
                Tururile VR pot fi distribuite cu usurinta si accesate oriunde,
                oricând, atragand un număr mare de vizualizări și interacțiuni.
                Astfel, puteti targeta orice platforma on-line: site-ul
                companiei, rețele de socializare, listari imobiliare–
                Publi24.ro, Imobiliare.ro, Olx.ro și altele, cu cele mai noi
                instrumente de promovare imobiliara online.
              </CardText>
            </CardBody>
          </Card>

          <Card className="greens cardPrincipal">
            <CardBody>
              <CardTitle>
                {" "}
                <VanzariSVG />
                <h1 className="titluAvantajCard">Cresterea vânzărilor</h1>
              </CardTitle>

              <CardText className="lineheight2em">
                Prezentarea unui număr ridicat de proprietăți, într-un timp
                scurt, unui public larg duce la cresterea vanzarilor. 90% dintre
                cumpărători susțin că sunt mai atrași de un anunț care oferă și
                un tur 3D al proprietății.
              </CardText>
            </CardBody>
          </Card>
          <Card className="reds cardPrincipal">
            <CardBody>
              <CardTitle>
                <CheltuieliSVG />
                <h1 className="titluAvantajCard">Scăderea cheltuielilor</h1>
              </CardTitle>

              <CardText className="lineheight2em">
                Agentul și clientul nu trebuie să se deplaseze la locaţie,
                pentru a vizualiza proprietatea. Un tur virtual precalifică cu
                succes doar clienții cu adevărat interesați, minimizând
                costurile și timpul pierdut cu vizionările inutile.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};
