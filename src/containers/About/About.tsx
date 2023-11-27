import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-bold text-2xl">
          We are committed to helping our global customers succeed
        </h1>
      </div>
      <div className="text-blue-300">
        <p className="mb-4">
          Our Vision is to enable product teams to build better products through world-class software that facilitate product team communication in a design-driven approach.
        </p>
        <p>
          With employees located in over 30 countries, our support teams are available 24/7, worldwide. Our global presence enables us to provide peerless support and availability, assisting customers all over the world.
        </p>
      </div>
    </div>
  );
};

export default About;