import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "We design and develop responsive, user-friendly websites tailored to your business needs. From e-commerce to portfolio sites, we ensure high-quality results using modern technologies.",
      icon: "🌐",
    },
    {
      title: "JavaScript Games",
      description:
        "Bring your creative ideas to life with interactive and engaging JavaScript games. We specialize in game development for web browsers, ensuring compatibility and smooth performance across devices.",
      icon: "🎮",
    },
    {
      title: "Mobile Apps",
      description:
        "Our team develops cross-platform mobile applications with intuitive interfaces and robust functionality. Whether you need a productivity app or a fun game, we've got you covered.",
      icon: "📱",
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
