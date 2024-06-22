import Head from "next/head";

import Landing from "@/components/landing";
import UseCases from "@/components/sections/use-cases";
import ButtonGlow from "@/components/button-glow";
import { Metadata } from 'next';
import ReviewCard from "@/components/review-card";
import { reviews } from "@/public/data/reviews";
import UseCaseSection from "@/components/usecase-section";

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
      <Head>
        <title>{metadata.title}</title>
        <meta content={metadata.description} name="description" />
        <meta content={metadata.title} property="og:title" />
        <meta content={metadata.description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="https://www.virtualrenovation.ai/" property="og:url" />
        <meta content="/images/virtualrenovationhome.png" property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={metadata.title} name="twitter:title" />
        <meta content={metadata.description} name="twitter:description" />
        <meta
          content="/images/virtualrenovationhome.png"
          name="twitter:image"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Virtual Renovation",
              description: metadata.description,
              url: "https://www.virtualrenovation.ai/",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: averageRating.toFixed(2),
                ratingCount: reviews.length,
                reviewCount: reviews.length,
                bestRating: 5,
                worstRating: 1,
              },
              review: reviews.map((review) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: review.reviewerName,
                },
                reviewBody: review.reviewContent,
                datePublished: review.reviewDate,
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: review.rating,
                },
              })),
            }),
          }}
          type="application/ld+json"
        />
      </Head>

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
          <UseCaseSection />
        </div>
      </section>
    </>
  );
}
