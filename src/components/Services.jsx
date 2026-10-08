import '../css/Services.css';

// Importing service images from assets
import shreeYantraImg from '../assets/shree-yantra.jpeg';
import satyanarayanImg from '../assets/satyanarayan-katha.jpeg';
import shivPoojaImg from '../assets/shiv-pooja.avif';
import kalashPoojaImg from '../assets/kalash-pooja.avif';
import hawanImg from '../assets/hawan.avif';
import visheshNaagImg from '../assets/vishesh-naag.avif';
import navratriImg from '../assets/navratri-pooja.jpeg';
import kundliImg from '../assets/kundli.jpeg';

const servicesData = [
  {
    title: "Shree Yantra Pooja",
    image: shreeYantraImg,
    description: "Sacred ritual worshipping the Shree Yantra to attract wealth, abundance, and divine positive energy into your residence or business."
  },
    {
    title: "Shiv Pooja",
    image: shivPoojaImg,
    description: "Traditional worship and Abhishekam dedicated to Lord Shiva to dispel negative energies, grant inner peace, and bring spiritual enlightenment."
  },
  {
    title: "Satyanarayan Katha",
    image: satyanarayanImg,
    description: "A auspicious story recitation and prayer dedicated to Lord Vishnu, performed during special occasions to invoke peace, health, and prosperity."
  },
  {
    title: "Kalash Pooja",
    image: kalashPoojaImg,
    description: "A foundational ritual invoking divine forces into a sacred brass or copper pot, symbolizing life, creation, and purity for all ceremonies."
  },
  {
    title: "Hawan",
    image: hawanImg,
    description: "Sacred fire ceremony accompanied by Vedic mantra chanting to purify the surrounding atmosphere and eliminate karmic obstacles."
  },
  {
    title: "Navratri Pooja",
    image: navratriImg,
    description: "Nine nights of intense devotion and ritual offerings dedicated to Goddess Durga, seeking her divine strength, grace, and protection."
  },
  {
    title: "Vishesh Naag Pooja",
    image: visheshNaagImg,
    description: "Specialized Vedic ritual performed to alleviate Kaal Sarp Dosh and seek protection, harmony, and peace from the Naag Devtas."
  },
  {
    title: "Astrology / Kundli Consultation",
    image: kundliImg,
    description: "Detailed birth chart reading and planetary analysis offering deep insights into career, relationships, health, and effective remedies."
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="online-pooja-banner">
        Online Pooja Also Available
      </div>
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img 
              src={service.image} 
              alt={service.title} 
              className="service-image" 
            />
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
