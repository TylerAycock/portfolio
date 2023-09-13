import "./Tech.css"

const Tech = ({ tech }) => {
  let specifics = tech.map((item) => {
    return <p className="body-lg item">{item}</p>;
  });
  return <div className="tech-container">{specifics}</div>;
};

export default Tech;
