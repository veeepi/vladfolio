import React, { useState } from 'react';
import axios from 'axios';

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
      // await axios.post('http://localhost:4000/send', { ...contactInfo });
      await axios.post(
        'https://us-central1-nodefire-contact.cloudfunctions.net/app/send',
        { ...contactInfo }
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log('contactInfo: ', contactInfo);

  return (
    <div className="contactPage">
      <div className="contactPage__section">
        {mailSent ? (
          <div>
            <h1>Email Sent</h1>
            <button onClick={() => setMailSent(false)}>Send Another</button>
          </div>
        ) : (
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
        )}
      </div>
      {/* <div className="contactPage__social">
					<AiOutlineMail size={36} className="contactPage__social__icon"/>
					<AiFillLinkedin size={36} className="contactPage__social__icon" />
					<AiOutlineGithub size={36} className="contactPage__social__icon"/>
					<AiFillFacebook size={36} className="contactPage__social__icon" />
				</div> */}
    </div>
  );
}
