export const maxDuration = 100; // This function can run for a maximum of 5 seconds

import { NextRequest } from "next/server";
import Replicate from "replicate";

export type GenerateResponseData = {
  original: string | null;
  generated: string | null;
  upscaled: string | null;
  id: string;
};

interface Props {
  imageUrl: string;
  theme: string;
  room: string;
}

async function generateImage(
  imageUrl: string,
  theme: string,
  room: string,
  REPLICATE_API_TOKEN: string,
) {
  const prompt = `A high resolution photo of a ${theme.toLowerCase()} styled ${room.toLowerCase()}`;

  const replicate = new Replicate({
    auth: REPLICATE_API_TOKEN,
  });

  const output: any = await replicate.run(
    "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
    {
      input: {
        seed: 1,
        image: imageUrl,
        prompt: prompt,
        guidance_scale: 7.5,
        negative_prompt:
          "lowres, watermark, banner, logo, watermark, contactinfo, text, deformed, blurry, blur, out of focus, out of frame, surreal, extra, ugly, upholstered walls, fabric walls, plush walls, mirror, mirrored, functional, realistic",
        prompt_strength: 0.8,
        num_inference_steps: 50,
      },
    },
  );

  return output;
}

async function upscaleImage(imageUrl: string, REPLICATE_API_TOKEN: string) {
  const replicate = new Replicate({
    auth: REPLICATE_API_TOKEN,
  });

  const output: any = await replicate.run(
    "philz1337x/clarity-upscaler:f11a4727f8f995d2795079196ebda1bcbc641938e032154f46488fc3e760eb79",
    {
      input: {
        seed: 1337,
        image: imageUrl,
        prompt:
          "masterpiece, best quality, highres, <lora:more_details:0.5> <lora:SDXLrender_v2.0:1>",
        dynamic: 6,
        handfix: "disabled",
        sharpen: 0,
        sd_model: "juggernaut_reborn.safetensors [338b85bc4f]",
        scheduler: "DPM++ 3M SDE Karras",
        creativity: 0.35,
        lora_links: "",
        downscaling: false,
        resemblance: 0.6,
        scale_factor: 2,
        tiling_width: 112,
        output_format: "png",
        tiling_height: 144,
        custom_sd_model: "",
        negative_prompt:
          "(worst quality, low quality, normal quality:2) JuggernautNegative-neg",
        num_inference_steps: 18,
        downscaling_resolution: 768,
      },
    },
  );

  return output;
}

export async function POST(request: NextRequest) {
  const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

  try {
    const { imageUrl, theme, room }: Props = await request.json();

    const generatedImage = await generateImage(
      imageUrl,
      theme,
      room,
      REPLICATE_API_TOKEN as string,
    );
    const upscaledImage = generatedImage
      ? await upscaleImage(generatedImage, REPLICATE_API_TOKEN as string)
      : null;

    return new Response(
      JSON.stringify({
        original: imageUrl,
        generated: generatedImage,
        upscaled: upscaledImage,
        id: generatedImage ? generatedImage.id : "",
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
