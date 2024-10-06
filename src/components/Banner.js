import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import girl from "../assets/img/girl.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "Web Designer",
    "Full Stack Developer",
    "Mobile Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <h2>Welcome to my Portfolio</h2>

              <h1>
                {`Hi! I'm Sachini Sahasra`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "Full Stack Developer", "Mobile Developer"]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Dedicated and enthusiastic IT undergraduate student passionate
                about technology and problem-solving. Engaging in projects,
                internships, and extracurricular activities, hackathons, and
                university tech clubs.
              </p>
            </div>
          )}
        </TrackVisibility>

        <spline-viewer
          url="https://prod.spline.design/7PjOJltVOdFGXqmn/scene.splinecode"
          style={{ paddingLeft: "50px" }}
        ></spline-viewer>
      </Container>
      <style jsx>{`
        @media (max-width: 1200px) {
          div[spline-viewer] {
            height: 400px;
          }
        }
        @media (max-width: 768px) {
          div[spline-viewer] {
            height: 300px;
          }
        }
        @media (max-width: 576px) {
          div[spline-viewer] {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

const splineViewerStyles = {
  width: "100%",
  height: "500px", // default height for large screens
  marginTop: "20px",
};