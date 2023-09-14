import "./Contact.css";
import rings from "../../public/assets/images/pattern-rings.svg";
import github from "../../public/assets/images/icon-github.svg";
import linkedin from "../../public/assets/images/icon-linkedin.svg";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitHandler = (data) => {
    console.log(data);
    alert(
      `Thanks ${data.name} I'll reach out as soon as possible, have a great day!`
    );
    reset();
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
        <div className={errors.name ? "ind-input error" : "ind-input"}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <span className="error-field">This is required</span>}
        </div>
        <div className={errors.email ? "ind-input error" : "ind-input"}>
          <input
            className="input"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="error-field">This is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="error-field">Invalid email</span>
          )}
        </div>
        <div className={errors.message ? "ind-input error" : "ind-input"}>
          <input
            className="input"
            type="textbox"
            placeholder="Message"
            {...register("message")}
          />
        </div>
        <button type="submit" className="submit">
          SEND MESSAGE
        </button>
      </form>
      <div className="footer-section">
        <h1 className="header-md">Tyler Aycock</h1>
        <div className="footer-links">
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
