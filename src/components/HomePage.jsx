import { Container, Alert, Dropdown } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import MovieList from "./MovieList";
import { useState, useEffect} from "react";
import { Row, Col, Navbar, Nav, FormControl, InputGroup} from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom'



const HomePage =(props)=> {
  const location = useLocation()
const [searchString, setSearchString] = useState('')

// state = {
//   searchString: "",
// };

const searchStringHandler = (e) => {
if (e.keyCode === 13) {
  // WHEN ENTER KEY IS PRESSED
  props.showSearchResult(searchString);
} else {
  setSearchString(e.currentTarget.value)
}
};

return (
  <>
  <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
    <Navbar.Brand href="/">
      <img
        src="assets/logo.png"
        alt="logo"
        style={{ width: "100px", height: "55px" }}
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/">
          <div
            className={
              "nav-link font-weight-bold" +
              (location.pathname === "/" ? " active" : "")
            }
          >
            Home
          </div>
        </Link>
        <Link to="/tv-shows">
         <div className={'nav-link font-weight-bold' + (location.pathname === '/tv-shows' ? ' active' : '')}>TvShows</div>
        </Link>
        <Nav.Link className="font-weight-bold" href="">
          Movies
        </Nav.Link>
        <Nav.Link className="font-weight-bold" href="">
          Recently Added
        </Nav.Link>
        <Nav.Link className="font-weight-bold" href="">
          My List
        </Nav.Link>
      </Nav>
      <span className="d-flex align-items-center">
        <InputGroup className="icons">
          <FormControl
            placeholder="Search and press enter"
            aria-label="search"
            aria-describedby="basic-addon1"
            onKeyDown={searchStringHandler}
            onChange={searchStringHandler}
            value={searchString}
          />
        </InputGroup>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons"></i>
        <i className="fa fa-user icons"></i>
      </span>
    </Navbar.Collapse>
  </Navbar>
  <footer className="ali">
    <Row className="text-center mt-5">
      <Col xs={{ span: 6, offset: 3 }}>
        <Row>
          <Col xs={12} className="text-left mb-2">
            <i className="fa fa-facebook footer-icon"></i>
            <i className="fa fa-instagram footer-icon"></i>
            <i className="fa fa-twitter footer-icon"></i>
            <i className="fa fa-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="/" alt="footer link">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Contact us
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="/" alt="footer link">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Legal Notices
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="/" alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="/" alt="footer link">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2">
            <button
              type="button"
              className="btn btn-sm footer-button rounded-0 mt-3"
            >
              Service Code
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2 mt-2 copyright">
            © 1997-{new Date().getFullYear()} Netflix, Inc.
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
  </>
);

}
export default HomePage
