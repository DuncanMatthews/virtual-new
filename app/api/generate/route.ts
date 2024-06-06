export const maxDuration = 100; // This function can run for a maximum of 5 seconds

import { NextRequest } from "next/server";
import Replicate from "replicate";

export type GenerateResponseData = {
  original: string | null;
  generated: string | null;
  id: string;
};

interface Props {
  imageUrl: string;
  theme: string;
  room: string;
}

export async function POST(request: NextRequest) {
  const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

  try {
    const { imageUrl, theme, room }: Props = await request.json();
    const prompt = `A high resolution photo of a ${theme.toLowerCase()} styled ${room.toLowerCase()}`;

    const replicate = new Replicate({
      auth: REPLICATE_API_TOKEN,
    });

    const output: any = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      {
        input: {
          image: imageUrl,
          prompt: prompt,
          guidance_scale: 7.5,
          negative_prompt: "lowres, watermark, banner, logo, watermark, contactinfo, text, deformed, blurry, blur, out of focus, out of frame, surreal, extra, ugly, upholstered walls, fabric walls, plush walls, mirror, mirrored, functional, realistic",
          prompt_strength: 0.8,
          num_inference_steps: 50,
        },
      },
    );



    const originalImage = imageUrl;
    const generatedImage = output
    // const responseId = output



    return new Response(
      JSON.stringify({
        original: originalImage,
        generated: generatedImage,
        // id: responseId,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return new Response(JSON.stringify("Failed to restore image"), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
