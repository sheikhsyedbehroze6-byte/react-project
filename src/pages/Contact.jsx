import { useState, useEffect } from 'react';

const Contact = () => {
  // Demonstration of React Hooks (useState)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Demonstration of React Hooks (useEffect)
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div>
      <h2 className="section-title">Contact Us</h2>
      
      {submitted && (
        <div className="alert success">
          Thank you for reaching out! We will get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
