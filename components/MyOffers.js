import { Card, p, CardText, CardDeck, Row, Col } from "reactstrap";
import React from "react";
export default props => {
  // const submit = () => {
  //   alert("mue");
  // };
  return (
    <div className="main">
      <style global jsx>
        {`
            .grupOferte {
              // padding: 1em;
              // height: 100%;
              text-aling:center;
            }
           .card {
             margin-bottom: 2em;
             height: 100%;
           }
            .card-body {
             

            }
            .imagine1 {
              float: center;
              height:20em;
            }
            .main {
              height: 100%;
              margin-top: 0px;
              margin-left: 20px;
              margin-right: 20px;
              min-height: 65vh;
            }
            .card-title {
   
             
            }
            .card-text {
           
              
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
              margin-top: 2em;
            }
            .card-text {
           
            }
            .card-body {
              
              padding-bottom:2em;
            }
            .tabelPreturi {
              padding: 2em;
              background: white;
              color: black;
              margin:0.5em;
              border-radius:1em;
              padding-top:2em;
            }
            .cardOferta {
              text-align:center;
            }
            .titluOferta {
              background:#1c23316b;
              color:white;
              display:inline;
              padding-left:2em;
              padding-right:2em;
              border-radius:2em;
              padding-top:0.2em;
              padding-bottom:0.2em;
              // width:83%;
              margin-left:1em;
              margin-right:1em;
              margin-top:1em;
              font-size:2em;

            }
            .descriereOferta {
              background: #3E4551;
              color: white;
              display: inline;
              padding-left: 1em;
              padding-right: 1em;
              border-radius: 2em;
              padding-top: 0.4em;
              padding-bottom: 0.5em;
              width: 20%
              margin-bottom: 2em;
              font-weight: 600;
              font-size: 13px;
            }
            th {
              padding-left:3.7em !important;
              color:green;
            }
        `}
      </style>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      />
      <CardDeck className="grupOferte">
        <Card body inverse color="info" className="cardOferta">
          <p className="titluOferta">BASIC</p>
          <div className="tabelPreturi">
            <div>
              <p className="descriereOferta">FOTOGRAFIE IMOBILIARA 360</p>
              <Row className="liniePreturi">
                <table className="table table-hover table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Suprafata</th>
                      <th scope="col">Tarif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>sub 50 mp</td>
                      <td>150 RON</td>
                    </tr>
                    <tr>
                      <td>50-100 mp</td>
                      <td>250 RON</td>
                    </tr>
                    <tr>
                      <td>100-200 mp</td>
                      <td>350 RON</td>
                    </tr>
                  </tbody>
                </table>
              </Row>
            </div>
          </div>
        </Card>
        <Card body inverse color="warning" className="cardOferta">
          <p className="titluOferta blue-gradient">PLUS</p>
          <div className="tabelPreturi">
            <p className="descriereOferta">FOTOGRAFIE IMOBILIARA 360</p>
            <Row className="liniePreturi">
              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">Suprafata</th>
                    <th scope="col">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>sub 50 mp</td>
                    <td>150 RON</td>
                  </tr>
                  <tr>
                    <td>50-100 mp</td>
                    <td>250 RON</td>
                  </tr>
                  <tr>
                    <td>100-200 mp</td>
                    <td>350 RON</td>
                  </tr>
                </tbody>
              </table>
            </Row>
          </div>
          {/* <CardFooter className="text-muted">
            <div classname="footerText">
              <Button>Exemplu</Button>
            </div>
          </CardFooter> */}
        </Card>
        <Card body inverse color="danger" className="cardOferta">
          <p className="titluOferta">PREMIUM</p>
          <div className="tabelPreturi">
            <p className="descriereOferta">FOTOGRAFIE IMOBILIARA 360</p>
            <Row className="liniePreturi">
              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">Suprafata</th>
                    <th scope="col">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>sub 50 mp</td>
                    <td>150 RON</td>
                  </tr>
                  <tr>
                    <td>50-100 mp</td>
                    <td>250 RON</td>
                  </tr>
                  <tr>
                    <td>100-200 mp</td>
                    <td>350 RON</td>
                  </tr>
                </tbody>
              </table>
            </Row>
          </div>
          {/* <CardFooter className="text-muted">
            <div classname="footerText">
              <Button>Exemplu</Button>
            </div>
          </CardFooter> */}
        </Card>
      </CardDeck>
    </div>
  );
};
