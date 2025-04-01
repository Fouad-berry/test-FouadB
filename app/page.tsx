import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Image from 'next/image';
import image from './Images/modern_kitchen.png';
import './globals.css';

const Page = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:space-x-10">

          <div className="w-full md:w-1/2 text-left md:mt-20">
            <h2 className="top-text mb-4">
              <span className="highlight-text">L&aqpos;immobilier neuf</span> n&apos;a jamais été aussi simple
            </h2>
            <p className="text-gray-700 mb-6">
              Leader national du marché, Côté Neuf vous conseille, recherche, négocie, optimise votre financement, et vous accompagne jusqu&apos;à la remise des clés. Le tout, gratuitement et en toute sérénité.
            </p>

            <div className="flex space-x-4">
              <button className="contact-button text-white py-2 px-4 rounded">
                Contactez-nous
              </button>
              <button className="know-more text-gray-800 py-2 px-4 rounded">
                En savoir plus
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src={image}
              alt="Cuisine moderne"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Page;
