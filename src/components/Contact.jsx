import "./Contact.css"
import rings from "../assets/images/pattern-rings.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={rings} className="footer-ring"/>
      <div className="contact-blurb">
        <h1 className="header-lg">Contact</h1>
        <p className="body-lg">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible!
        </p>
      </div>
      <form action="" id="contact" className="form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="textbox" rows="10" cols="50" placeholder="message" />
        <button type="submit" className="submit">SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default Contact;
