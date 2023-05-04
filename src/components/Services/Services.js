import { services } from "../../data.js";
import Title from "../Title/Title.js";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title ta="our" tb="services" />

      <div className="section-center services-center">
        {services.map((s) => {
          return (
            <article className="service">
              <span className="service-icon">
                <i className={s.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{s.title}</h4>
                <p className="service-text">
                  {s.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
