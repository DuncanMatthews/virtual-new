import { Image } from "@nextui-org/react";
import React from "react";

export default function Bathroom() {
  return (
    <div className="flex flex-row justify-center space-x-4">
      <div>
        <Image
          isBlurred
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="/images/rooms/bathroom-1.png"
          width={800}
        />
      </div>
      <div>
        <Image
          isBlurred
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="/images/rooms/bathroom-2.png"
          width={800}
        />
      </div>
    </div>
  );
}
