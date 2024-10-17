
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://iiitn.ac.in">
               WEB.jsx
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://iiitn.ac.in/">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://iiitn.ac.in">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://iiitn.ac.in"
            target="_blank"
          >
             WEB.jsx
          </a>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
