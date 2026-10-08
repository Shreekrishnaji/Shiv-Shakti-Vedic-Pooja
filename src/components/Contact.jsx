import { useState } from 'react';
import '../css/Contact.css';

const countryCodes = [
  { code: '+1', country: 'US/CA', flag: '🇺🇸' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+61', country: 'AU', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+65', country: 'SG', flag: '🇸🇬' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const formData = new FormData(e.target);

    // Combine country code with the phone number
    const phoneNumber = formData.get("phone_number");
    formData.append("phone", `${selectedCountryCode} ${phoneNumber}`);
    formData.delete("phone_number"); // Clean up standard input name

    // Replace with your Web3Forms Access Key
    formData.append("access_key", "c71fd7c8-8646-47c5-b5a9-26793548b1b5");
    formData.append("subject", "New Inquiry from Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Fill out the form below and we will get back to you shortly.
        </p>

        {submitted ? (
          <div className="success-message">
            Thank you! Your message has been sent successfully. We will get in touch soon.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {errorMsg && <div className="error-message">{errorMsg}</div>}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone-input-group">
                <select
                  className="country-code-select"
                  value={selectedCountryCode}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                >
                  {countryCodes.map((item) => (
                    <option key={item.code + item.country} value={item.code}>
                      {item.flag} {item.code} ({item.country})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone_number"
                  placeholder="(555) 000-0000"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}