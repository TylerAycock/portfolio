import "./Contact.css";
import rings from "../assets/images/pattern-rings.svg";
import frntendmtr from "../assets/images/icon-frontend-mentor.svg";
import github from "../assets/images/icon-github.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defualtValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className="contact-container">
      <img src={rings} className="footer-ring" />
      <div className="contact-blurb">
        <h1 className="header-lg">Contact</h1>
        <p className="body-lg">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible!
        </p>
      </div>
      <form
        action=""
        id="contact"
        className="form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
        <span className="error-field">{errors.name?.message}</span>
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
              message: "Must be a valied email",
            },
          })}
        />
        <span className="error-field">{errors.email?.message}</span>
        <input
          type="textbox"
          rows="10"
          cols="50"
          placeholder="message"
          {...register("message")}
        />
        <button type="submit" className="submit">
          SEND MESSAGE
        </button>
      </form>
      <div className="footer-section">
        <h1 className="header-md">Tyler Aycock</h1>
        <div className="footer-links">
          <a
            href="https://www.frontendmentor.io/profile/TylerAycock"
            target="blank"
            className="link"
          >
            <img src={frntendmtr} alt="frontend mentor logo" />
          </a>
          <a
            href="https://github.com/TylerAycock"
            target="blank"
            className="link"
          >
            <img src={github} alt="github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-aycock-2b2191a8/"
            target="blank"
            className="link"
          >
            <img src={linkedin} alt="linkdin logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
