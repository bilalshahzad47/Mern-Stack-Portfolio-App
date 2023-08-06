import React from "react";
import { SiReact, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023-present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiJavascript />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                NodeJS, ExpressJS, MONGODB, ReactJS, ReactNative
              </h4>
              <p>
              As a full-stack developer, My responsibilities included designing and implementing front-end user 
              interfaces using technologies like HTML, CSS, and JavaScript, while also working on back-end server-side 
              logic with frameworks like Node.js and Express.js. Additionally, I collaborated with databases like MySQL 
              or MongoDB to manage data storage and retrieval efficiently. 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023-Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaNodeJs />}
            >
              <h3 className="vertical-timeline-element-title">
                MERN Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                NodeJS, ExpressJS, MONGODB, ReactJS,
              </h4>
              <p>
              As a MERN (MongoDB, Express.js, React.js, Node.js) stack developer, I designed and implemented 
              interactive user interfaces using React.js while managing data with MongoDB. Additionally, I 
              built efficient server-side APIs using Node.js and Express.js to ensure seamless data flow and 
              a smooth user experience.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2021 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                ReactJS
              </h4>
              <p>
              As a ReactJS Developer, I specialized in creating responsive and interactive user interfaces for 
              web applications.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;