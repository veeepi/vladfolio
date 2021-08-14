import React, { useState } from 'react';

export default function ContactPage() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = () => {};

  return (
    <div className="contactPage">
      <form className="contactPage__form" onSubmit={handleSubmit}>
        <div className="contactPage__form__section">
          <label className="contactPage__form__section__label">Name: </label>
          <input
            required
            className="contactPage__form__section__input"
            type="text"
            value={contact.name}
            onChange={(e) =>
              setContact({
                ...contact,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="contactPage__form__section">
          <label className="contactPage__form__section__label">
            Email Address:{' '}
          </label>
          <input
            required
            className="contactPage__form__section__input"
            type="email"
            value={contact.email}
            onChange={(e) =>
              setContact({
                ...contact.ContactPage,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="contactPage__form__section">
          <label className="contactPage__form__section__label">Message: </label>
          <textarea
            rows="4"
            cols="50"
            wrap="hard"
            id="messageBox"
            className="contactPage__form__section__input"
            value={contact.message.message}
            onChange={(e) =>
              setContact({
                ...contact,
                message: e.target.value,
              })
            }
          />
        </div>

        <button className="contactPage__form__submit" type="submit">
          Submit
        </button>
      </form>
      {/* <div className="contactPage__social">
					<AiOutlineMail size={36} className="contactPage__social__icon"/>
					<AiFillLinkedin size={36} className="contactPage__social__icon" />
					<AiOutlineGithub size={36} className="contactPage__social__icon"/>
					<AiFillFacebook size={36} className="contactPage__social__icon" />
				</div> */}
    </div>
  );
}
