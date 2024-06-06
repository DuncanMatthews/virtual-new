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

interface StyleData {
  [key: string]: {
    colorPalette: string;
    accentColors: string;
    furnitureStyle: string;
    sofaStyle: string;
    armchairStyle: string;
    wallTreatment: string;
    wallArtStyle: string;
    flooringType: string;
    rugStyle: string;
    windowTreatmentStyle: string;
    lightingStyle: string;
    decorElements: string;
    greenery: string;
    layoutStyle: string;
    atmosphere: string;
    roomPurpose: string;
  };
}

const styleData: StyleData = {
  modern: {
    colorPalette: "neutral colors with bold accents",
    accentColors: "black, white, and primary colors",
    furnitureStyle: "sleek and minimalist",
    sofaStyle: "leather or fabric with clean lines",
    armchairStyle: "geometric shapes and metal frames",
    wallTreatment: "painted in neutral tones or featuring a bold accent wall",
    wallArtStyle: "abstract or minimalist prints",
    flooringType: "polished concrete or light-colored hardwood",
    rugStyle: "geometric patterns or solid colors",
    windowTreatmentStyle: "simple, minimalist curtains or blinds",
    lightingStyle: "pendant lights or track lighting with a modern design",
    decorElements: "minimalist sculptures, vases, and pillows",
    greenery: "succulents or small potted plants",
    layoutStyle: "open and uncluttered",
    atmosphere: "cool and sophisticated",
    roomPurpose: "relaxation and entertaining",
  },
  // ... other styles ...
};

export async function POST(request: NextRequest) {
  const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

  try {
    const { imageUrl, theme, room }: Props = await request.json();

    const selectedStyle = styleData[theme.toLowerCase()];

    const prompt = `The ${room.toLowerCase()} showcases a ${theme.toLowerCase()} design, featuring ${selectedStyle.colorPalette} and ${selectedStyle.accentColors}. The space incorporates ${selectedStyle.furnitureStyle} furniture, such as a ${selectedStyle.sofaStyle} sofa and ${selectedStyle.armchairStyle} armchairs. The room includes ${selectedStyle.wallTreatment} on the walls and ${selectedStyle.wallArtStyle} artwork. The flooring is ${selectedStyle.flooringType} with a ${selectedStyle.rugStyle} rug. The windows have ${selectedStyle.windowTreatmentStyle} treatments and the lighting consists of ${selectedStyle.lightingStyle} fixtures. The room is accessorized with ${selectedStyle.decorElements} and ${selectedStyle.greenery}. The layout is ${selectedStyle.layoutStyle}, creating a ${selectedStyle.atmosphere} atmosphere perfect for ${selectedStyle.roomPurpose}.`;

    console.log(prompt);

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
          negative_prompt:
            "lowres, watermark, banner, logo, watermark, contactinfo, text, deformed, blurry, blur, out of focus, out of frame, surreal, extra, ugly, upholstered walls, fabric walls, plush walls, mirror, mirrored, functional, realistic",
          prompt_strength: 0.8,
          num_inference_steps: 300,
        },
      }
    );

    console.log(output);

    const originalImage = imageUrl;
    const generatedImage = output ? (output as string) : null;

    return new Response(
      JSON.stringify({
        original: originalImage,
        generated: generatedImage,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify("Failed to generate image"), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}