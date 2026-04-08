const About = () => {
  return (
    <div>
      <h2 className="section-title">About Us</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <p style={{ marginBottom: '1rem' }}>
            Founded in 2026, Business Pro was established with a singular vision: 
            to simplify modern business solutions for growing companies.
          </p>
          <p>
            We believe in transparency, innovation, and pushing the boundaries of 
            what is possible in web development and corporate services.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: '300px', background: 'var(--bg-offset)', padding: '2rem', borderRadius: '8px' }}>
          <h3>Our Mission</h3>
          <p style={{ marginTop: '1rem' }}>
            To deliver outstanding results through creative strategy and 
            technological expertise, driving success for every client we partner with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
