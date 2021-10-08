import React, { useState } from 'react';
import axios from 'axios';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

export default function ContactPage() {
  const [mailSent, setMailSent] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleSendMail = async () => {
    setMailSent(true);
    try {
      await axios.post(
        'https://us-central1-nodefire-contact.cloudfunctions.net/app/send',
        { ...contactInfo }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {mailSent ? (
        <div className="contactPage">
          <h1 className="contactPage__sentMessage">Email Sent</h1>
          <button
            className="contactPage__sendAnotherButton"
            onClick={() => setMailSent(false)}
          >
            <h3 className="contactPage__sendAnotherButton__text">
              Send Another
            </h3>
          </button>
        </div>
      ) : (
        <div className="contactPage">
          <div className="contactPage__intro">
            <p className="contactPage__intro__p">
              Complete and Submit the form below, and I will receive an email
              with your information.
            </p>
            <p className="contactPage__intro__p">
              Powered by my NodeJS app{' '}
              <a
                href="https://github.com/veeepi/nodefire-contact"
                rel="noreferrer"
                target="_blank"
              >
                "nodefire_contact"
              </a>{' '}
              implemetning Nodemailer.
            </p>
          </div>
          <div className="contactPage__section">
            <form
              className="contactPage__section__form"
              onSubmit={handleSendMail}
            >
              <div className="contactPage__section__form__field">
                <label className="contactPage__section__form__field__label">
                  Name:{' '}
                </label>
                <input
                  required
                  className="contactPage__section__form__field__input"
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="contactPage__section__form__field">
                <label className="contactPage__section__form__field__label">
                  Email Address:{' '}
                </label>
                <input
                  required
                  className="contactPage__section__form__field__input"
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="contactPage__section__form__field">
                <label className="contactPage__section__form__field__label">
                  Message:{' '}
                </label>
                <textarea
                  rows="4"
                  cols="50"
                  wrap="hard"
                  id="messageBox"
                  className="contactPage__section__form__field__input"
                  value={contactInfo.message}
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      message: e.target.value,
                    })
                  }
                />
              </div>

              <button
                className="contactPage__section__form__submit"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="contactPage__social">
            <a
              href="https://www.linkedin.com/in/vlad-preduna/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={40} className="contactPage__social__icon" />
            </a>
            <a
              href="https://github.com/veeepi"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub
                size={40}
                className="contactPage__social__icon"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
