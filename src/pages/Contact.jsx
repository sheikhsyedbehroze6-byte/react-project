import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:info@mapesticides.ac.in?subject=Website Query: ${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <AnimatedSection className="section-header">
        <h2>Contact Us</h2>
        <p>Visit our shop near Lal Chowk or reach out for agricultural consultation.</p>
      </AnimatedSection>

      <div className="contact-grid">
        <AnimatedSection delay={0.2} className="contact-info">
          <h3>Shop Information</h3>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            We are centrally located in Srinagar. Drop by for expert advice on pesticides and fertilizers.
          </p>

          <div className="info-item">
            <div className="info-icon"><MapPin size={24} /></div>
            <div>
              <strong>Address</strong>
              <p>Ground Floor, Opposite Fly Over, near Crime Branch, Srinagar, J&K</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Phone size={24} /></div>
            <div>
              <strong>Phone</strong>
              <p>+91 99065 41321</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Mail size={24} /></div>
            <div>
              <strong>Email</strong>
              <p>info@mapesticides.ac.in</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Clock size={24} /></div>
            <div>
              <strong>Business Hours</strong>
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Ask Us</h3>
            
            {isSubmitted && (
              <div style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={20} />
                <span>Redirecting to your email client...</span>
              </div>
            )}

            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Crop / Problem (e.g. Apple Scab)" value={formData.subject} onChange={handleChange} />
            <textarea name="message" rows="5" placeholder="Describe your issue..." value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Ask Us</button>
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
}
