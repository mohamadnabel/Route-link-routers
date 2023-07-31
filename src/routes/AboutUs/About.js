import React from "react";
import "./About.css"; // Import the CSS file

const ContactUs = () => {
  return (
    <div className="container">
      <h1 className="heading">Contact Us</h1>
      <p className="paragraph">
        Welcome to our contact page! Feel free to reach out to us if you have
        any questions or inquiries.
      </p>
      <ul className="list">
        <li>Email: contact@example.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      <form className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
