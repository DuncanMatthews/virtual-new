import { Image } from "@nextui-org/react";
import React from "react";

export default function Bedroom() {
  return (
    <div className="flex flex-row justify-center space-x-4">
      <div>
        <Image
          isBlurred
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="/images/rooms/bed-2.png"
          width={800}
        />
      </div>
      <div>
        <Image
          isBlurred
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="/images/rooms/bed-1.png"
          width={800}
        />
      </div>
    </div>
  );
}
