import Head from "next/head";
import Landing from "@/components/landing";
import UseCases from "@/components/sections/use-cases";
import ButtonGlow from "@/components/button-glow";
import ReviewCard from "@/components/review-card";
import { reviews } from "@/public/data/reviews";

export const metadata = {
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
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.virtualrenovation.ai/" />
        <meta property="og:image" content="/images/virtualrenovationhome.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="/images/virtualrenovationhome.png"
        />
        <script
          type="application/ld+json"
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
      </section>
    </>
  );
}
