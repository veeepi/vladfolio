import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="aboutPage__download">
        <a
          href="https://www.dropbox.com/s/apkfpiz3c11r8z2/Resume%20-%20Vlad%20Preduna.pdf?dl=0"
          download
        >
          View/Download Resume
        </a>
      </div>
      <Scrollbars style={{ height: 300 }}>
        <div className="aboutPage__intro">
          <img
            src="img/aboutPage_intro2.jpg"
            className="aboutPage__intro__image"
            width="90%"
            // height="100%"
          />
          <div className="aboutPage__intro__narrative">
            <h1 className="aboutPage__intro__narrative__greet">
              Hi, my name is Vlad.
            </h1>
            <p className="aboutPage__intro__narrative__textbox">
              <br />I like to think big, and to simplify life's problems. My
              professional and life experience awakened a passion for utilizing
              the magic of programming towards solving problems in creative
              ways.
            </p>
            <p>
              I currently possess 7 years of experience in Accounting &amp;
              Finance in both private and public sector. However, my passion for
              programming has driven me to attain 1 year of Software Developer
              training through the British Columbia Institute of Technology
              simultaneous to employment.
            </p>
            <br />
          </div>
        </div>
        <div className="aboutPage__skills">
          <div className="aboutPage__skills__column">
            <h1 className="aboutPage__skills__column__heading">Front-End</h1>
            <div className="aboutPage__skills__column__body">
              <ul>
                <li>HTML, CSS/SASS</li>
                <li>Bootstrap</li>
                <li>Javascript, jQuery</li>
                <li>React.js, React-Native, Angular</li>
              </ul>
            </div>
            <div className="aboutPage__skills__column__tools"></div>
          </div>
          <div className="aboutPage__skills__column">
            <div className="aboutPage__skills__column__heading">
              <h1 className="aboutPage__skills__column__heading">Back-End</h1>
            </div>
            <div className="aboutPage__skills__column__body">
              <ul>
                <li>C#, Java, Ruby, Python</li>
                <li>SQL, MQL</li>
                <li>ASP.NET Core, NodeJS</li>
              </ul>
            </div>
          </div>
          {/* <div className="aboutPage__skills__column">
						<div className="aboutPage__skills__column__heading"></div>
						<div className="aboutPage__skills__column__body"></div>
					</div> */}
        </div>
        <div className="aboutPage__experience">
          <div className="aboutPage__experience__section">
            <h1>Education</h1>
            <h3 className="aboutPage__experience__section__title">
              British Columbia Institute of Technology
            </h3>
            <h4 className="aboutPage__experience__section__description">
              Software Systems Developer Certification
            </h4>
            <br />

            <h3 className="aboutPage__experience__section__title">
              University of British Columbia
            </h3>
            <h4 className="aboutPage__experience__section__description">
              Bachelor of Arts Degree - Major in Mathematics, Minor in Economics
            </h4>
          </div>

          <div className="aboutPage__experience__section">
            <h1 className="aboutPage__experience__section__title">
              Recent Work Experience
            </h1>
            <h3 className="aboutPage__experience__section__subject">
              Douglas College
            </h3>
            <h4 className="aboutPage__experience__section__description">
              Accounting &amp; Finance
            </h4>
            <br />
            <h3 className="aboutPage__experience__section__subject">
              Paladin Security Group Ltd.
            </h3>
            <h4 className="aboutPage__experience__section__description">
              Accounting &amp; Finance
            </h4>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
}
