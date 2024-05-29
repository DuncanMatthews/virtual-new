/* eslint-disable no-console */
"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import { useState } from "react";
// eslint-disable-next-line import/order
import { AnimatePresence, motion } from "framer-motion";

export type GenerateResponseData = {
  original: string | null;
  generated: string | null;
  id: string;
};

// const data = {
//   remainingGenerations: 5,
// };

import {
  roomType,
  rooms,
  themeType,
  themes,
} from "../../../utils/dropdownTypes";

import ResizablePanel from "@/components/resizable-panel";
import DropDown from "@/components/drop-down";
import UploadImage from "@/components/upload-image";
import LoadingDots from "@/components/loadingdots";
import { CompareSlider } from "@/components/compare-slider";

export default function Dream() {
  const { isLoaded, isSignedIn, user } = useUser();

  const [theme, setTheme] = useState<themeType>("Modern");
  const [room, setRoom] = useState<roomType>("Living Room");
  const [photoName, setPhotoName] = useState<string | null>("");
  const [originalPhoto, setOriginalPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  // const options = {
  //   maxFileCount: 1,
  //   mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  //   editor: { images: { crop: false } },
  //   tags: [data?.remainingGenerations > 5 ? "paid" : "free"],
  //   styles: {
  //     colors: {
  //       primary: "#2563EB", // Primary buttons & links
  //       error: "#d23f4d", // Error messages
  //       shade100: "#fff", // Standard text
  //       shade200: "#fffe", // Secondary button text
  //       shade300: "#fffd", // Secondary button text (hover)
  //       shade400: "#fffc", // Welcome text
  //       shade500: "#fff9", // Modal close button
  //       shade600: "#fff7", // Border
  //       shade700: "#fff2", // Progress indicator background
  //       shade800: "#fff1", // File item background
  //       shade900: "#ffff", // Various (draggable crop buttons, etc.)
  //     },
  //   },
  //   onValidate: async (file: File): Promise<undefined | string> => {
  //     return data.remainingGenerations === 0
  //       ? `No more credits left. Buy more above.`
  //       : undefined;
  //   },
  // };

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    setProgress(0);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl, theme, room }),
    });

    let response = (await res.json()) as GenerateResponseData;

    if (res.status !== 200) {
      setError(response as any);
      setLoading(false);
    } else {
      setRestoredImage(response.generated);

      // Simulate progress update
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 500);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {isLoaded || isSignedIn ? (
        <Link
          className="border border-gray-700 rounded-2xl py-2 px-4 text-gray-700 text-sm my-6 duration-300 ease-in-out hover:text-gray-300 hover:scale-105 transition"
          href="/buy-credits"
        >
          Pricing is now available.{" "}
          <span className="font-semibold text-purple-600">Click here</span> to
          buy credits!
        </Link>
      ) : (
        <a
          className="border border-gray-700 rounded-2xl py-2 px-4 text-gray-700 text-sm my-6 duration-300 ease-in-out hover:text-gray-300 transition"
          href="https://twitter.com/nutlope/status/1635674124738523139?cxt=HHwWhsCz1ei8irMtAAAA"
          rel="noopener noreferrer"
          target="_blank"
        >
          Over{" "}
          <span className="font-semibold text-gray-200">1 million users</span>{" "}
          have used Virtual Renovation AI so far
        </a>
      )}
      <div className="flex items-center align-middle justify-center text-center">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal sm:text-5xl mb-5 text-gray-200">
          Get your <span className="text-purple-600">virtual renovation </span>{" "}
          Inspritation
        </h1>
      </div>
      <ResizablePanel>
        <AnimatePresence mode="wait">
          <motion.div className="flex justify-between items-center w-full flex-col mt-4">
            {" "}
            <>
              {!restoredImage && (
                <div className="space-y-4 w-full max-w-sm ">
                  <div className="flex mt-3 items-center space-x-3">
                    <Image
                      alt="1 icon"
                      height={30}
                      src="/number-1-white.svg"
                      width={30}
                    />
                    <p className="text-left font-medium text-gray-200">
                      Choose your room theme.
                    </p>
                  </div>
                  <DropDown
                    themes={themes}
                    theme={theme}
                    // @ts-ignore
                    setTheme={(newTheme) => setTheme(newTheme)}
                  />
                </div>
              )}
              <div className="space-y-4 w-full max-w-sm">
                <div className="flex mt-10 items-center space-x-3">
                  <Image
                    alt="1 icon"
                    height={30}
                    src="/number-2-white.svg"
                    width={30}
                  />
                  <p className="text-left font-medium text-gray-200">
                    Choose your room type.
                  </p>
                </div>
                <DropDown
                  themes={rooms}
                  theme={room}
                  // @ts-ignore
                  setTheme={(newRoom) => setRoom(newRoom)}
                />
              </div>
              <div className="mt-4 w-full max-w-sm">
                <div className="flex mt-6 w-96 items-center space-x-3">
                  <Image
                    alt="1 icon"
                    height={30}
                    src="/number-3-white.svg"
                    width={30}
                  />
                  <p className="text-left font-medium text-gray-200">
                    Upload a picture of your room.
                  </p>
                </div>
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Generated Room</h2>
                {loading ? (
                  <div className="flex flex-col items-center justify-center">
                    <LoadingDots color="purple" style="large" />
                    <div className="mt-4">
                      <progress
                        className="w-full h-2 appearance-none bg-gray-300 rounded-full overflow-hidden"
                        max="100"
                        value={progress}
                      />
                      <div className="mt-2 text-center text-gray-600">
                        {progress}% Complete
                      </div>
                    </div>
                  </div>
                ) : restoredImage && originalPhoto ? (
                  <CompareSlider
                    original={URL.createObjectURL(originalPhoto)}
                    restored={restoredImage}
                  />
                ) : null}
              </div>
              <div className="flex mt-5 items-center">
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8 max-w-[575px]"
                    role="alert"
                  >
                    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                      Please try again later.
                    </div>
                    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                      {error}
                    </div>
                  </div>
                )}
                {originalPhoto && !loading && !generatePhoto && (
                  <div>
                    {photoName}
                    <Image
                      alt="original photo"
                      className="rounded-2xl"
                      height={500}
                      src={URL.createObjectURL(originalPhoto)}
                      width={513}
                    />
                  </div>
                )}
                {!loading && !originalPhoto && (
                  <UploadImage
                    generatePhoto={generatePhoto}
                    setOriginalPhoto={setOriginalPhoto}
                    setPhotoName={setPhotoName}
                  />
                )}
              </div>
            </>
          </motion.div>{" "}
        </AnimatePresence>
      </ResizablePanel>
    </div>
  );
}
