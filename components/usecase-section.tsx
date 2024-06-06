"use client";
import { Image } from "@nextui-org/react";
import { useState } from "react";

export default function Component() {
  const [selectedStyle, setSelectedStyle] = useState("Minimalist");

  const styles = [
    "Modern",
    "Traditional",
    "Rustic",
    "Industrial",
    "Farmhouse",
    "Scandinavian",
    "Mid-Century Modern",
    "Bohemian",
    "Coastal",
    "Minimalist",
    "Transitional",
    "Eclectic",
    "Vintage",
    "Mediterranean",
    "Tropical",
    "Glam",
    "Zen",
    "Modern Farmhouse",
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-left">
          High Resolution Interior Design Inspiration
        </h2>
      
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 max-h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </div>
          <Image
            alt={`${selectedStyle} Living Room`}
            className="object-contain max-h-full max-w-full"
            height={800}
            src={`/images/styles/${selectedStyle.toLowerCase().replace(/\s/g, "-")}.png`}
            width={800}
          />
          <div className=" p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">
              {selectedStyle} Styled Bedroom
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A neutral, pared-back aesthetic.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {styles.map((style) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              key={style}
              className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 ${
                selectedStyle === style ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedStyle(style)}
            >
              <div className="absolute inset-0 z-10">
                <span className="sr-only">View</span>
              </div>
              <Image
                alt={`${style} Living Room`}
                className="object-cover w-full h-40"
                height={150}
                src={`/images/styles/${style.toLowerCase().replace(/\s/g, "-")}.png`}
                width={150}
              />
              <div className="bg-white p-2 dark:bg-gray-950">
                <h4 className="font-semibold text-sm">{style}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
