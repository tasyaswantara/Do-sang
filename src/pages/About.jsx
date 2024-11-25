import React from 'react';
import SingletonService from '../services/SingletonService';

const About = () => {
  const data = SingletonService.getData();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Tentang Kami</h2>
      <p className="mt-4">
        {data.company} berdiri sejak tahun {data.year}. Kami menyediakan keripik pisang premium!
      </p>
    </div>
  );
};

export default About;
