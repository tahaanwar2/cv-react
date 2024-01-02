import React from "react";
import Header from "../components/Header";
import "./Home.css";

const Skills = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="skills">
          <div className="resume-section-content" style={{ textAlign: "left" }}>
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                React
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Html
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Css
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Bootstrap

              </li>

              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                JavaScript
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                MySQL

              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                WordPress

              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Python

              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                C Language

              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                C++

              </li>


              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Fundamental of Graphic Design

              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Technical Support Fundamentals

              </li>

            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
