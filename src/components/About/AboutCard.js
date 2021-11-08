import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo Semuanya, Saya <span className="purple">Rizal Chris Pristiwanto </span>
            dari <span className="purple"> Nganjuk, Indonesia.</span>
            <br />Saya adalah lulusan perguruan tinggi (IPK 3.43) sebagai sarjana komputer.
            Dengan kemauan besar, bertanggung jawab dengan pekerjaan saya dan cepat beradaptasi.
            <br />
            <br />
            Selain mengoding, beberapa aktivitas saya seperti
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain Dota 2
            </li>
            <li className="about-activity">
              <ImPointRight /> Mencari tahu tentang teknologi terbaru
            </li>
            <li className="about-activity">
              <ImPointRight /> Terus belajar dengan sesuatu hal yang baru
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Jika Kamu tidak sanggup menahan lelahnya belajar maka kamu harus sanggup menahan perihnya kebodohan"{" "}
          </p>
          <footer className="blockquote-footer">Imam Syafi'i</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
