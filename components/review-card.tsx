import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

interface ReviewCardProps {
  reviews: {
    id: number;
    reviewerName: string;
    reviewerAvatar: string;
    reviewerTitle: string;
    reviewTitle: string;
    reviewContent: string;
    reviewDate: string;
    rating: number;
  }[];
}

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStar = "/images/full-star.svg";
  const halfStar = "/images/half-star.svg";
  const emptyStar = "/images/empty-star.svg";
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(fullStar);
    } else if (i - rating === 0.5) {
      stars.push(halfStar);
    } else {
      stars.push(emptyStar);
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars.map((star, index) => (
        <Image key={index} alt="Star icon" height={20} src={star} width={20} />
      ))}
    </div>
  );
};

const ReviewCard: React.FC<ReviewCardProps> = ({ reviews }) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-left">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="h-auto shadow-md rounded-lg">
              <CardHeader className="flex-col items-start p-4">
                <div className="flex items-center gap-3">
                  <Avatar
                    alt="Reviewer avatar"
                    size="lg"
                    src={review.reviewerAvatar}
                  />
                  <div>
                    <h4 className="text-lg font-bold">{review.reviewerName}</h4>
                    <p className="text-sm text-gray-500">
                      {review.reviewerTitle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="p-4">
                <h3 className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {review.reviewTitle}
                </h3>
                <p className="font-thin	">{review.reviewContent}</p>
              </CardBody>
              <CardFooter className="flex justify-between items-center p-4">
                <p className="text-sm text-gray-500">{review.reviewDate}</p>
                <StarRating rating={review.rating} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
