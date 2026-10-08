import '../css/About.css';
import aboutImg from '../assets/about-bg.avif';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">
            Welcome to <span className="highlight-text">Shiv Shakti</span>
          </h1>
          <p className="about-subtitle">
            Dedicated to providing traditional spiritual services, authentic Vedic poojas, 
            astrological consultations, and personalized guidance to help restore peace, 
            harmony, and balance in your life.
          </p>
          <a href="#contact" className="about-btn">Book a Pooja</a>
        </div>

        <div className="about-image-wrapper">
          <img src={aboutImg} alt="Shiv Shakti About" className="about-image" />
        </div>
      </div>
    </section>
  );
}
