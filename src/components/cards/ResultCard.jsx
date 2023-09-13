import "./ResultCard.css";
import Tech from "./Tech";

const data = [
  {
    title: "E-commerce Website",
    tech: ["HTML", "CSS", "JS", "React"],
    // img: { market },
    img: "./src/assets/images/e-commerce.png",
    link: "https://www.youtube.com/watch?v=tPNLxsZ0EWY&t=2s",
  },
  {
    title: "Results Summary",
    tech: ["HTML", "CSS", "JS", "React"],
    img: "./src/assets/images/results.png",
    link: "https://enchanting-fenglisu-0db0c5.netlify.app/",
  },
  {
    title: "Age Calculator",
    tech: ["HTML", "CSS", "JS", "React"],
    img: "./src/assets/images/age-calculator.png",
    link: "https://resplendent-shortbread-eb1e72.netlify.app/",
  },
  {
    title: "Newsletter",
    tech: ["HTML", "CSS", "JS", "React"],
    img: "./src/assets/images/register-pg.png",
    link: "https://astonishing-lollipop-975294.netlify.app/",
  },
  {
    title: "QR Code",
    tech: ["HTML", "CSS"],
    img: "./src/assets/images/qr-code.png",
    link: "https://elegant-zuccutto-98c122.netlify.app/",
  },
];

const ResultCard = () => {
  return (
    <div className="card-container">
      {data.map((proj, index) => {
        return (
          <div key={index} className="card">
            <a href={proj.link} target="blank">
              <img
                src={proj.img}
                alt={proj.title + " " + "image"}
                className="img"
              />
            </a>
            <h3 className="header-med">{proj.title}</h3>
            <Tech tech={proj.tech} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultCard;
