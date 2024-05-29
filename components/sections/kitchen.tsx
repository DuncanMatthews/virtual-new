import React from "react";
import { Image } from "@nextui-org/react";

export default function Kitchen() {
  return (
    <div className="flex flex-row justify-center space-x-4">
      <div>
        <Image
          isBlurred
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          width={240}
        />
      </div>
      <div>
        <Image
          isBlurred
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          width={240}
        />
      </div>
    </div>
  );
}
