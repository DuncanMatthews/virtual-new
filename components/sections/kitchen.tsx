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
          src="/images/rooms/kitchen-1.png"
          width={800}
        />
      </div>
      <div>
        <Image
          isBlurred
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="/images/rooms/kitchen-2.png"
          width={800}
        />
      </div>
    </div>
  );
}
