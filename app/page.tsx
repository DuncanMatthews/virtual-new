import Head from "next/head";

import Landing from "@/components/landing";
import UseCases from "@/components/sections/use-cases";
import ButtonGlow from "@/components/button-glow";
import type { Metadata } from 'next'
import ReviewCard from "@/components/review-card";
import { reviews } from "@/public/data/reviews";
import UseCaseSection from "@/components/usecase-section";
import DrawingToRealisticRenderer from "@/components/image-render";

export const metadata: Metadata = {
  title: "Virtual Renovation: AI-Powered Interior Design Platform",
  description:
    "Transform your space with AI-generated interior design ideas. Upload a photo of your room and explore personalized design concepts for your home renovation project.",
};

export default async function Home() {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return (
    <>
      
      <section className="flex flex-col">
        <div className="flex mb-10 justify-center items-center">
          <Landing />
        </div>
        <div className="flex justify-center items-center">
          <UseCases />
        </div>
        <div>
          <ButtonGlow />
        </div>
        <div className="max-w-7xl mt-10 mx-auto">
          <ReviewCard reviews={reviews} />
        </div>
        <div className="max-w-7xl mt-10 mx-auto">
          <DrawingToRealisticRenderer />
        </div>
        <div className="max-w-7xl mt-10 mx-auto">
          <UseCaseSection />
        </div>
        
      </section>
    </>
  );
}
