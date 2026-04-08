import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Consulting',
      description: 'Expert advice to elevate your business strategy.',
      icon: '💼'
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'High performance React applications and websites.',
      icon: '💻'
    },
    {
      id: 3,
      title: 'Marketing',
      description: 'Data-driven campaigns to reach your target audience.',
      icon: '📈'
    }
  ];

  return (
    <div>
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {/* Iterating array and passing props to reusable component */}
        {servicesList.map(service => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
