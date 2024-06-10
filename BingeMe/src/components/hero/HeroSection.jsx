import background from '../../assets/test/792435.jpg';
import './HeroSection.css'
const HeroSection = () => {

  const myStyle = {
    backgroundImage:`url(${background})`,
  }

  return (
    <section style={myStyle} id="hero-section">
      <div className="wrapper">

          <div className="movie-details">

                <h1 id="movie-title">John Wick III</h1>

                <div className="button-group">
                  <button id="play">Play Now</button>
                  <button id="trailer">Watch Trailer</button>
                </div>

                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam quae id fugit provident, delectus consectetur aspernatur officiis saepe iure, dolor, asperiores sunt. Consequuntur molestias maxime perspiciatis pariatur soluta rem reiciendis consectetur, quaerat eius neque blanditiis! Consequatur in sint magni asperiores! Consequuntur obcaecati qui inventore pariatur nulla eum vitae nisi.
                </p>

                <p id="movie-title-full"><strong>John Wick 3: Parabellum</strong></p>
          </div>

          <p className='absolute' id="Directors"><strong>Directors </strong>Chad Stahelski</p>

      </div>
    </section>
  );
}

export default HeroSection
