import React from "react";
import Header from "../components/Header";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              TAHA ANWAR
              <span class="text-primary"></span>
            </h1>
            <br />
            <h3 >SOFTWARE ENGINEERING</h3>

            <br />
            <div>
              <p class="lead mb-5">
                As a highly motivated and enthusiastic Software Engineer, I am
                committed to utilizing my technical skills and creativity to deliver
                high-quality software solutions. My passion for coding and
                learning new technologies has led me to pursue a career in
                software development. I am excited to continue growing as a
                developer and look forward to contributing to the success of your
                organization.
              </p>
            </div>
          </div>
        </section>
        <hr class="m-0" />



        <section class="resume-section" id="education">
          <div className="mb-4 social-icon-container">
            <h2 class="mb-5" style={{ margin: "0" }}>Personal Details</h2>
            <br />
            <span className="me-4"></span>
            <div className="mb-4">
              <h3>Social Media:</h3>
              <br />
              {/* <div className="subheading mb-4 d-flex align-items-center"> */}
              <a className="me-4" href="https://www.facebook.com/taha.anwar2?mibextid=ZbWKwL" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/facebook.png"
                  alt="Facebook Icon"
                  style={{ width: "42px", height: "auto", marginLeft: "100px", marginRight: "20px" }}
                />
              </a>
              <span className="me-4"></span>
              <a className="me-4" href="https://github.com/tahaanwar2" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/github.png"
                  alt="Github Icon"
                  style={{ width: "46px", height: "auto", marginRight: "25px" }}
                />
              </a>
              <span className="me-4"></span>
              <a className="me-4" href="https://www.linkedin.com/in/taha-anwar-2517a0218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/linkedin.png"
                  alt="LinkedIn Icon"
                />
              </a>


              <span className="me-4"></span>
              <a className="me-4" href="tel:+923322698020" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/call.png"
                  alt="call Icon"
                />
              </a>
              <span className="me-4"></span>
              <a className="me-4" href="https://wa.me/923322698020" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/whatsapp.png"
                  alt="Whatsapp Icon"
                />
              </a>
              <span className="me-4"></span>
              <a className="me-4" href="mailto:taha.anwar2@yahoo.com" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/yahoo.png"
                  alt="Yahoo Icon"
                />
              </a>

              <span className="me-4"></span>
              <a className="me-4" href="https://youtube.com" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/yutb.png"
                  alt="Yahoo Icon"
                  style={{ width: "42px", height: "auto" }}
                />
              </a>

            </div>
            <br />
            <br />
            <div class="mb-3">
              <h3 class="mb-0">Address:</h3>

              <a href="https://www.google.com/maps/place/R-651,+sector+10,+Kalyana+Town,+North+Karachi,+Pakistan" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/map.png"
                  alt="Map Icon"
                />
              </a>
              <div class="subheading">
                R-651, sector 10, Kalyana Town, North Karachi, Pakistan

              </div>
            </div>
            <br />




            <br />
            <br />
            <div class="mb-3">
              <h3 class="mb-0">Date of Birth:</h3>
              <div class="subheading">05-JUNE-1999</div>
            </div>

            <br />
            <br />
            <div class="mb-3">
              <h3 class="mb-0">Nationality:</h3>
              <div class="subheading">Pakistani

                <span /><img
                  className="img-fluid social-icon"
                  src="./img/pak.jpg"></img>
              </div>
            </div>
          </div>
        </section >
        <hr class="m-0" />


        <section class="resume-section" id="education">
          <div class="">
            <h2 class="mb-5">Education</h2>
            <br />
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Sir Syed University of Engineering and Technology </h3>
                <div class="subheading mb-3">B.S. SOFTWARE ENGINEERING</div>

              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">(2023) </span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Govt. Dehli College </h3>
                <div class="subheading mb-3">Intermediate: Pre-Engineering</div>

              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">(2017)</span>
              </div>
            </div>


            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Hilton Public School  </h3>
                <div class="subheading mb-3">Matriculation: Computer Science</div>

              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">(2015)</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />


        <div class="container-fluid p-0">

          <section class="resume-section" id="skills">
            <div class="resume-section-content">
              <h2 class="mb-5">Projects</h2>
              <br />
              <br />
              <h3>Repository</h3>
              <span className="me-4"></span>
              <br />
              <br />
              <a className="me-4" href="https://github.com/tahaanwar2" target="_blank">
                <img
                  className="img-fluid social-icon"
                  src="./img/github.png"
                  alt="Github Icon"
                  style={{ width: "60px", height: "auto", marginLeft: "50px" }}
                />
              </a>
            </div>

          </section >
        </div>

        <hr class="m-0" />
        <section class="resume-section" id="skills">
          <div class="">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                React

              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Html

              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
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
        </section >
        <hr class="m-0" />

        <section class="resume-section" id="awards">
          <div class="">
            <h2 class="mb-5">Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Complete JavaScript with HTML5, CSS (Udemy)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                HTML, CSS & Bootstrap (Udemy)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>

                JavaScript and jQuery (Udemy)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>

                Web Design for or Web Developers (Udemy)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>

                Getting Started With Application Development (Coursera)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>


                Complete Wordpress Website Developer Course (Udemy)

              </li>

              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>


                Enterprise Systems (Coursera)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>

                Technical Support Fundamentals (Coursera)
              </li>

              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                The Bits and Bytes of Computer Networking (Coursera)
              </li> <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Fundamentals of Graphic Design (Coursera)
              </li>
            </ul>
          </div>
        </section>
      </div >
    </>
  );
};

export default Home;