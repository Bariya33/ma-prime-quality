import './Founders.css';

const BASE_URL = import.meta.env.BASE_URL;

export default function Founders() {
  return (
    <section className="founders" id="founders">
      <div className="container founders__container">

        <div className="founders__top">
          <span className="section-label__index">
          <li> LEADERSHIP</li>
          </span>

          <h2 className="founders__heading">
            MEET THE
            <br />
            FOUNDERS.
          </h2>

          <p className="founders__intro">
            The people behind MA Prime Quality — shaping every project
            with vision, precision and creative intent.
          </p>
        </div>

        <div className="founders__grid">

          {/* MANTHAN */}
          <article className="founder-card founder-card--main">
            <div className="founder-card__image-wrap">
              <img
                src={`${BASE_URL}media/images/team/manthanbariya.jpeg`}
                alt="Manthan Bariya"
                className="founder-card__image"
              />

              <div className="founder-card__overlay" />

              <span className="founder-card__number">
                01
              </span>
            </div>

            <div className="founder-card__content">
              <span className="founder-card__role">
                FOUNDER & CEO
              </span>

              <h3>
                MANTHAN
                <br />
                BARIYA
              </h3>

              <p>
                Leading the vision, creative direction and growth of
                MA Prime Quality.
              </p>
            </div>
          </article>

          {/* AJAY */}
          <article className="founder-card">
            <div className="founder-card__image-wrap">
              <img
                src={`${BASE_URL}media/images/team/ajaymarwadi.png`}
                alt="Ajay Marwadi"
                className="founder-card__image"
              />

              <div className="founder-card__overlay" />

              <span className="founder-card__number">
                02
              </span>
            </div>

            <div className="founder-card__content">
              <span className="founder-card__role">
                CO-FOUNDER & VICE CEO
              </span>

              <h3>
                AJAY
                <br />
                MARWADI
              </h3>

              <p>
                Supporting strategy, operations and execution across
                the studio.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}