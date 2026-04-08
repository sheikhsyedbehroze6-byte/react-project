import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to Business Pro</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Your premier destination for professional services and exceptional experiences.
        </p>
        <Link to="/services">
          <button>Explore Our Services</button>
        </Link>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2 className="section-title">Why Choose Us?</h2>
        <p>
          We offer industry-leading solutions with a focus on modern design, 
          customer satisfaction, and continuous innovation.
        </p>
      </div>
    </div>
  );
};

export default Home;
