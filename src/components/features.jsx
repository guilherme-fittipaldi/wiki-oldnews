import { TbGrave2, TbHourglassLow } from "react-icons/tb";
import { FaBirthdayCake, FaQuestion } from "react-icons/fa";

export const Features = (props) => {
  const icons = [
    <TbHourglassLow />,
    <FaBirthdayCake />,
    <TbGrave2 />,
    <FaQuestion />,
  ];
  return (
    <div id="eventos" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Eventos</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon} styel={{ color: "#000" }}>
                    {icons[i]}
                  </i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
