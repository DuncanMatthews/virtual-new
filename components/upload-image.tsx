"use client";

import type { PutBlobResult } from "@vercel/blob";

import { useState, useRef } from "react";

interface Props {
  setOriginalPhoto: (photo: File | null) => void;
  setPhotoName: (name: string) => void;
  generatePhoto: (fileUrl: string) => Promise<void>;
}

export default function UploadImage({
  setOriginalPhoto = () => {},
  generatePhoto,
}: Props) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    setOriginalPhoto(file);
    if (file) {
      const response = await fetch(URL.createObjectURL(file));
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        const dataUri = reader.result as string;

        generatePhoto(dataUri);
      };
      reader.readAsDataURL(blob);
    }
  };

  return (
    <>
      <div className="flex flex-col text-center mb-4 pb-4">
        <form
          className="flex flex-col space-y-2"
          onSubmit={async (event) => {
            event.preventDefault();

            if (!inputFileRef.current?.files) {
              throw new Error("No file selected");
            }

            const file = inputFileRef.current.files[0];
            // const filename = file.name;

            // todo : TypeError: setPhotoName is not a function

            // setPhotoName(filename);

            const response = await fetch(
              `/api/avatar/upload?filename=${file.name}`,

              {
                method: "POST",
                body: file,
              },
            );

            const newBlob = (await response.json()) as PutBlobResult;

            setBlob(newBlob);
          }}
        >
          <input
            ref={inputFileRef}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            name="file"
            type="file"
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
