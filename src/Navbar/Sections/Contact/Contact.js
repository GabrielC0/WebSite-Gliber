import React from "react";
import "./Form.css";

export default function Contact() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </div>

      <div>
        <input type="submit" value="Submit message" />
      </div>
    </form>
  );
}
