import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashwini Prakash </span>
            from <span className="purple"> Darbhanga (Bihar), INDIA.</span>
            <br/>
            <br />Currently I am pursuing <span className="purple">Full Stak Web Development</span> course from Masai School.
            <br/>


            <br />I have completed my <span className="purple"> B.Tech</span> from Bakhtiyarpur College of Engineering<br/>in<span className="purple"> Computer Science and Engineering</span>.
            <br/>
            <br /> Apart from coding, some other activities that I love to do!
           
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Reading Novels.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games & Cricket.
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sucessfull people do not relex on chair they relex in thier work."{" "}
          </p>
          <footer className="blockquote-footer">Ashwini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
