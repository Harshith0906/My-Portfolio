import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Zomato Sales Analysis Using PowerBI"
              description="This project delivers a comprehensive sales and customer behavior analysis for Zomato using Power BI. By leveraging data visualization and business intelligence, it highlights key performance indicators (KPIs), ordering trends, and customer insights to drive strategic decision-making.

"
              ghLink="https://github.com/Harshith0906/Zomato-sales-dashboard-PowerBI"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Attendance"
              description="Automated Smart Attendance System leveraging facial recognition and real-time data analytics to streamline attendance tracking in academic and corporate environments. Built for scalability, security, and seamless integration into modern digital ecosystems."
              ghLink="https://github.com/Harshith0906/Smart-Attendance"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="To-Do Application"
              description="A full-stack To-Do List Manager built using the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates clean architecture, efficient state management, and seamless CRUD operations across the frontend and backend — delivering a responsive and scalable user experience."
              ghLink="https://github.com/Harshith0906/To-Do-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Harshith0906/Plant-Disease-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Real-Estate"
              description="A scalable, full-stack web application engineered to streamline property listing, discovery, and transaction workflows in the real estate sector. This platform enables buyers, sellers, and agents to seamlessly interact, facilitating property searches, bookings, and digital documentation in real time."
              ghLink="https://github.com/Harshith0906/Online-real-estate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Heart Disease Prediction"
              description="An AI-powered system that leverages Convolutional Neural Networks (CNNs) to classify ECG images for early-stage heart disease detection. This project integrates medical imaging and deep learning, aiming to assist healthcare professionals with fast, reliable diagnostic support."
              ghLink="https://github.com/Harshith0906/Heart-Disease-Prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
