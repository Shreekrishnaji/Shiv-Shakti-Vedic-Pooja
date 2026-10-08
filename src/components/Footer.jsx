import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <strong>WhatsApp</strong>
          <a href="tel:+19125311906">+1 (912) 531-1906</a>
        </div>

        <div className="footer-item">
          <strong>Email</strong>
          <a href="mailto:shivshaktivedicpooja@gmail.com">shivshaktivedicpooja@gmail.com</a>
        </div>

        <div className="footer-item">
          <strong>Location</strong>
          <span>Georgia, USA</span>
        </div>
      </div>
    </footer>
  );
}