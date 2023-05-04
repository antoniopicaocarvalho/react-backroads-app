import { tours } from "../../data.js";
import Title from "../Title/Title.js";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title ta="featured" tb="tours" />
      <div className="section-center featured-center">
        {tours.map((t) => {
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={t.img} className="tour-img" alt="" />
                <p className="tour-date">{t.date}</p>
              </div>
              <div className="tour-info">
                <h4>{t.title}</h4>
                <p>{t.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {t.location}
                  </p>
                  <p>{t.duration}</p>
                  <p>from ${t.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
