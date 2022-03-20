import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="aboutPage__download">
        <a
          href="https://www.dropbox.com/s/apkfpiz3c11r8z2/Resume%20-%20Vlad%20Preduna.pdf?dl=0"
          target="_blank"
          // rel="noreferrer"
          download
        >
          View/Download Resume
        </a>
      </div>
      <Scrollbars style={{ height: '70vh' }} className="aboutPage__body">
        <div className="aboutPage__body__intro">
          <img
            src={
              require('../../../assets/images/about/about_intro.jpg').default
            }
            alt="author"
            className="aboutPage__body__intro__image"
            width="90%"
            // height="100%"
          />
          <div className="aboutPage__body__intro__narrative">
            <h1 className="aboutPage__body__intro__narrative__greet">
              Hello, my name is
            </h1>
            <h1 className="aboutPage__body__intro__narrative__greetName">
              Vlad Preduna
            </h1>
            <br />
            <p className="aboutPage__body__intro__narrative__textbox">
              I'm a full-stack web &amp; mobile developer.
            </p>
            <br />
            <p className="aboutPage__body__intro__narrative__textbox">
              Let's solve problems beautifully.
            </p>
            {/* <br />
            <p>
              I currently possess 7 years of experience in Accounting &amp;
              Finance in both private and public sector. However, my passion for
              programming has driven me to attain 1 year of Software Developer
              training through the British Columbia Institute of Technology
              simultaneous to employment.
            </p>
            <br /> */}
          </div>
        </div>

        <div className="aboutPage__body__skills">
          <div className="aboutPage__body__skills__column">
            <h3 className="aboutPage__body__skills__column__heading">
              Front-End
            </h3>
            <div className="aboutPage__body__skills__column__body">
              <ul>
                <li>HTML, CSS/SASS</li>
                <li>Bootstrap</li>
                <li>Javascript, jQuery</li>
                <li>ReactJS, Angular, React-Native</li>
              </ul>
            </div>
            <div className="aboutPage__body__skills__column__tools"></div>
          </div>
          <div className="aboutPage__body__skills__column">
            <h3 className="aboutPage__body__skills__column__heading">
              Back-End
            </h3>
            <div className="aboutPage__body__skills__column__body">
              <ul>
                <li>C#, Java, Ruby, Python</li>
                <li>ASP.NET Core, NodeJS</li>
                <li>SQL, MQL/MongoDB</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="aboutPage__body__experience">
          <div className="aboutPage__body__experience__section">
            <h1 className="aboutPage__body__experience__section__heading">
              Education
            </h1>
            <h3 className="aboutPage__body__experience__section__title">
              British Columbia Institute of Technology
            </h3>
            <h4 className="aboutPage__body__experience__section__description">
              Software Systems Developer Certification
            </h4>
            <br />

            <h3 className="aboutPage__body__experience__section__title">
              Lighthouse Labs
            </h3>
            <h4 className="aboutPage__body__experience__section__description">
              Intro to Web Development
            </h4>
            <br />

            <h3 className="aboutPage__body__experience__section__title">
              University of British Columbia
            </h3>
            <h4 className="aboutPage__body__experience__section__description">
              BA - Major in Mathematics, Minor in Economics
            </h4>
          </div>

          <div className="aboutPage__body__experience__section">
            <h1 className="aboutPage__body__experience__section__heading">
              Recent Work Experience
            </h1>
            <h3 className="aboutPage__body__experience__section__title">
              Douglas College
            </h3>
            <h4 className="aboutPage__body__experience__section__description">
              Accounting &amp; Finance
            </h4>
            <br />
            <h3 className="aboutPage__body__experience__section__title">
              Paladin Security Group Ltd.
            </h3>
            <h4 className="aboutPage__body__experience__section__description">
              Accounting &amp; Finance
            </h4>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
}
