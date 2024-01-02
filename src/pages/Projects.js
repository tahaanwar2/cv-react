import React from "react";
import Header from "../components/Header";
import "./Home.css";

const Skills = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <Header />

                <section className="resume-section" id="skills">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Projects</h2>
                        <h3>Repository</h3>
                        <a
                            className="me-4"
                            href="https://github.com/tahaanwar2"
                            target="_blank"
                        >
                            <img
                                className="img-fluid social-icon"
                                src="./img/github.png"
                                alt="Github Icon"
                                style={{ width: "60px", height: "auto", marginLeft: "50px" }}
                            />
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Skills;
