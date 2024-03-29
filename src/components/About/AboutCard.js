import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manish Gautam </span>
            from <span className="purple"> Firozabad(U.P), India.</span>
            <br />I am pursuing BTech in Computer Science And Engineering from Dr. Ambedkar Institute of Technology for Handicapped kanpur. I have done a 6 month internship at <span className="purple">HooGaaa</span> as a Backend Developer
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Engineer Without Transferable Attitude Can't Transform The World!"{" "}
          </p>
          <footer className="blockquote-footer">Manish Gautam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
