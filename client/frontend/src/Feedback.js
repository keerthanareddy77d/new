import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Feedback = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_du8awut', 'template_rbqw8hr', form.current, 'CImyi_xe8oRaVFreJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Feedback</label>
      <input type="taxt" name="feedback" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};