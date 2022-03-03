import {
  Jumbotron,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import React, { useState } from "react";
import VrPic from "./VrPic";
export default props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <div className="navo">
        <Navbar color="dark" dark expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Acasa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/oferta">Oferte</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/oferta">Exemple</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/oferta">Intrebari frecvente</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>{" "}
        </Navbar>
      </div>
      <Jumbotron className="margins">
        <h1 className="display-4 text-primary">
          Tururi virtuale <span className="hotspan"> imobiliare</span>
        </h1>
      </Jumbotron>
      {/* <VrPic width="20%" /> */}

      <style global jsx>{`
        .navo {
          display: inline-flex;
        }
        .navbar {
          width: 100vw;
        }
        // .navbar {
        //   display: inline-flex;
        //   position: relative;
        // }
        // .nav {
        //   background: black;

        //   margin-left: 20px;
        //   margin-right: 20px;
        // }
        // .nav-link {
        //   color: aliceblue;
        // }
        .nav-link:hover {
          color: hotpink;
        }
        // .hotspan {
        //   color: black;
        // }
        // .margins {
        //   margin-left: 20px;
        //   margin-right: 20px;
        // }
        .collapse {
          margin-top: 0;
        }

        .logo {
          // padding-top: 0.75rem !important;
          // padding-left: 0.75rem;
        }
        .nav-link {
          color: white !important;
          font-size: 1em;
        }
        .navbar-toggler {
          padding: 1em !important;
          // background: violet !important;
          border-radius: 50% !important;
        }
        .logo {
          width: 7em;
          height: 7em;
        }
        .navbar-dark .navbar-toggler-icon {
          background-image: url(https://cdn.pixabay.com/photo/2017/11/07/07/06/menu-2925825_1280.png) !important;
          width: 3em;
          height: 3em;
        }
      `}</style>
    </div>
  );
};
