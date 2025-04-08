import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my_image.jpg";
import myImg2 from "../../Assets/my_image2.jpg";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [isFirstImage, setIsFirstImage] = useState(true);
  const [isRotating, setIsRotating] = useState(false);
  
  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage);
    setIsRotating(true);

    // Wait for the animation to complete before swapping image
    setTimeout(() => {
      setIsFirstImage(!isFirstImage);
      setIsRotating(false);
    }, 300); // Half a second matches CSS transition duration
  };
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A passionate {" "} 
              <i>
                <b className="purple">Computer Science </b> 
                and {" "}
                <b className="purple">
                AI & ML undergraduate {" "}
                </b>
              </i>
              at VNR Vignana Jyothi Institute of Engineering & Technology.
              <br />
              <br />
              My journey in programming has been fueled by curiosity and a drive to build impactful solutions.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Java and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new 
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  AI & ML Models.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into building innovative and efficient solutions using {" "}
              <i>
                <b className="purple">MERN Stack, </b> 
                integrating {" "}
                <b className="purple">
                Node.js, React.js, and MongoDB,
                </b>
                {" "} while also exploring AI/ML applications with {" "}
                <b className="purple">
                Python, Pytorch and OpenCV
                </b> {" "} to drive impactful development.
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img
                src={isFirstImage ? myImg : myImg2}
                className={`img-fluid my-avatar-img ${isRotating ? "image-rotate" : ""}`}
                alt="avatar"
                onClick={handleImageClick}
                style={{ cursor: "pointer" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Harshith0906"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Harshith0906"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/harshith09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harshith_patel_259"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
