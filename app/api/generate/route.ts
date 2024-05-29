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
    const prompt =
      room === "Gaming Room"
        ? "a video gaming room"
        : `A ${theme.toLowerCase()} ${room.toLowerCase()}`;

    const replicate = new Replicate({
      auth: REPLICATE_API_TOKEN,
    });

    const output: any = await replicate.run(
      "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
      {
        input: {
          eta: 1,
          image: imageUrl,
          scale: 30,
          prompt: prompt,
          a_prompt:
            "The room is a photorealistic, meticulously designed interior space with attention to detail, showcasing a harmonious blend of textures, lighting, and carefully selected furnishings. The composition is well-balanced, creating a visually appealing and inviting atmosphere. The image has a professional, high-resolution quality with crisp details and accurate shadows and reflections.",
          n_prompt:
            "low quality, blurry, pixelated, cluttered, messy, poorly lit, mismatched furniture, inconsistent style, unrealistic shadows, incorrect perspective, distorted objects, cut-off elements, artifacts, grain, noise",
          ddim_steps: 40,
          num_samples: "1",
          value_threshold: 0.1,
          image_resolution: "768",
          detect_resolution: 768,
          distance_threshold: 0.1,
        },
      },
    );

    const originalImage = imageUrl;
    const generatedImage = output && output[1] ? (output[1] as string) : null;
    // const roomId = output && output.id ? output.id as string : null;

    return new Response(
      JSON.stringify({
        original: originalImage,
        generated: generatedImage,
        // id: roomId,
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
