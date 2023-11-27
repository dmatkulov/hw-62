import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="basis-1/2">
        <h1 className="font-bold text-3xl mb-5">
          All the tools you need for Social Media analytics
        </h1>
        <p className="mb-4 text-sm text-blue-300">
          Prove the ROI of social I media, plan more engaging content, and create automated white label analytics reports.
        </p>
      </div>
      <div className="text-blue-300 basis-1/2">
        <img src={"src/assets/home.png"} alt="about" className="w-100"/>
      </div>
    </div>
  );
};

export default Home;