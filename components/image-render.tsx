'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExampleCard = ({ title,description, originalSrc, renderSrc }:any) => {
  const [showOriginal, setShowOriginal] = useState(true);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
    <p className='text-gray-600 pb-2 text-sm dark:text-gray-400'>{description}</p>
      <div className="relative aspect-video">
        <motion.img
          src={showOriginal ? originalSrc : renderSrc}
          alt={showOriginal ? "Original" : "Render"}
          className="w-full h-full object-cover rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <button
          onClick={() => setShowOriginal(!showOriginal)}
          className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 dark:bg-gray-200 dark:bg-opacity-70 text-white dark:text-gray-800 rounded-full p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </button>
        <div className="absolute bottom-2 left-2 bg-yellow-500 text-black text-sm font-bold px-2 py-1 rounded">
          {showOriginal ? "Original" : "Render"}
        </div>
      </div>
    </div>
  );
};

const ExamplesComponent = () => {
  return (
    <div className=" p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ExampleCard
          title="3D Model"
          originalSrc="/images/sketches/kitchen-sketch.webp"
          renderSrc="/images/sketches/kitchen-render.png"
          description="Render from 3D Model"
        />
        <ExampleCard
          title="Sketch"
          originalSrc="/images/sketches/lounge-sketch.webp"
          renderSrc="/images/sketches/lounge-render.png"
           description="Render from 3D Model"
        />
        <ExampleCard
          title="Real photo"
          originalSrc="/images/sketches/lounge2-sketch.webp"
          renderSrc="/images/sketches/lounge2-render.png"
           description="Render from 3D Model"
        />
      </div>
    </div>
  );
};

export default ExamplesComponent;