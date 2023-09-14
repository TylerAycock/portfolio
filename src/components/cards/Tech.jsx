import "./Tech.css";

const Tech = ({ tech }) => {
  let specifics = tech.map((item, index) => {
    return (
      <p className="body-lg item" key={index}>
        {item}
      </p>
    );
  });
  return <div className="tech-container">{specifics}</div>;
};

export default Tech;
