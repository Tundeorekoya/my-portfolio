import { useState } from "react";
import "./Qualification.css";
import { motion } from "framer-motion";

const Qualification = () => {
  const variants = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };
  const [toggle, SetToggle] = useState(1);

  const toggleTab = (index) => {
    SetToggle(index);
  };

  return (
    <motion.div variants={variants} initial="initial" whileInView="animate">
      <motion.section
        className=" section qualification-section"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.h2
          className="section-title"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          Qualification
        </motion.h2>
        <motion.span
          className="section-subtitle"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          My Journey
        </motion.span>

        <motion.div
          className="qualification-container container"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div
            className="qualification-tabs"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              className={
                toggle === 1
                  ? "qualification-button qualification-active button--flex"
                  : "qualification-button  button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
              Education
            </motion.div>
            <motion.div
              className="qualification-tabs"
              variants={variants}
              initial="initial"
              whileInView="animate"
            >
              <motion.div
                variants={variants}
                initial="initial"
                whileInView="animate"
                className={
                  toggle === 2
                    ? "qualification-button qualification-active button--flex"
                    : "qualification-button  button--flex"
                }
                onClick={() => toggleTab(2)}
              >
                <i className="uil uil-briefcase qualification-icon"></i>{" "}
                Experience
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="qualification-sections">
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              className={
                toggle === 1
                  ? "qualification-content qualification-content-active"
                  : "qualification-content"
              }
            >
              <motion.div
                variants={variants}
                initial="initial"
                whileInView="animate"
                div
                className="qualification-data"
              >
                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.h3
                    className="qualification-title"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Web Design
                  </motion.h3>
                  <motion.span
                    className="qualification-subtitle"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Yaba-college-0f-tech
                  </motion.span>
                  <motion.div
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    div
                    className="qualification-calendar"
                  >
                    <i className="uil uil-calendar-alt"></i>
                    2021 - present
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </motion.div>
              </motion.div>

              <motion.div
                className="qualification-data"
                variants={variants}
                initial="initial"
                whileInView="animate"
              >
                <div></div>
                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.span
                    className="qualification-rounder"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  ></motion.span>
                  <span
                    className="qualification-line"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  ></span>
                </motion.div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.h3
                    className="qualification-title"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Art Director
                  </motion.h3>
                  <motion.span
                    className="qualification-subtitle"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Yaba-college-0f-tech
                  </motion.span>
                  <motion.div
                    className="qualification-calendar"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2022
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="qualification-data"
                variants={variants}
                initial="initial"
                whileInView="animate"
              >
                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.h3
                    className="qualification-title"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Web Development
                  </motion.h3>
                  <motion.span
                    className="qualification-subtitle"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Yaba-college-0f-tech
                  </motion.span>
                  <motion.div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2020
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.span
                    className="qualification-rounder"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  ></motion.span>
                  <motion.span className="qualification-line"></motion.span>
                </motion.div>
              </motion.div>

              <motion.div
                className="qualification-data"
                variants={variants}
                initial="initial"
                whileInView="animate"
              >
                <div></div>
                <div>
                  <motion.span
                    className="qualification-rounder"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  ></motion.span>
                  <span className="qualification-line"></span>
                </div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.h3
                    className="qualification-title"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    ux expert
                  </motion.h3>
                  <motion.span
                    className="qualification-subtitle"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Yaba-college-0f-tech
                  </motion.span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2017-2018
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              className={
                toggle === 2
                  ? "qualification-content qualification-content-active"
                  : "qualification-content"
              }
            >
              <motion.div
                className="qualification-data"
                variants={variants}
                initial="initial"
                whileInView="animate"
              >
                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.h3
                    className="qualification-title"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Product
                  </motion.h3>
                  <motion.span
                    className="qualification-subtitle"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Google-nigeria
                  </motion.span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - present
                  </div>
                </motion.div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </motion.div>
              </motion.div>

              <motion.div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <motion.h3
                    className="qualification-title"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Ui Designer
                  </motion.h3>
                  <motion.span
                    className="qualification-subtitle"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Apple Inc-Nigeria
                  </motion.span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2022
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="qualification-data"
                variants={variants}
                initial="initial"
                whileInView="animate"
              >
                <div>
                  <motion.h3
                    className="qualification-title"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Web Designer
                  </motion.h3>
                  <motion.span
                    className="qualification-subtitle"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                  >
                    Figma
                  </motion.span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2020
                  </div>
                </div>

                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                >
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Qualification;
