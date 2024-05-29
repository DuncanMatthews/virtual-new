import { Image } from "@nextui-org/react";
import React from "react";

export default function Living() {
  return (
    <div className="flex flex-row justify-center space-x-4">
      <div>
        <Image
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="/images/rooms/living-1.png"
          width={800}
        />
      </div>
      <div>
        <Image
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src="/images/rooms/living-2.png"
          width={800}
        />
      </div>
    </div>
  );
}
