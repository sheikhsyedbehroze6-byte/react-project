import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
      <h3>{title}</h3>
      <p style={{ marginTop: '0.8rem', color: 'var(--text-muted)' }}>{description}</p>
    </div>
  );
};

// PropTypes validation
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string
};

ServiceCard.defaultProps = {
  icon: '⭐'
};

export default ServiceCard;
