import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

const ShareableComponent = () => {
  const shareUrl = "https://virtualrenovation.ai"; // Replace with your actual website URL
  const title =
    "Check out this awesome website! Virtual Renovation is an AI-Powered Interior Design Platform";

  return (
    <div className="flex flex-col items-center space-y-4 my-6">
      {/* <Link
        className="border border-gray-700 rounded-2xl py-2 px-4 text-gray-700 text-sm duration-300 ease-in-out hover:text-gray-300 hover:scale-105 transition"
        href="/buy-credits"
      >
        Pricing is now available.{" "}
        <span className="font-semibold text-purple-600">Click here</span> to buy
        credits!
      </Link> */}

      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          This website is free to use. You can support us by sharing with your
          friends.
        </p>
        <div className="flex justify-center space-x-2">
          <FacebookShareButton quote={title} url={shareUrl}>
            <FacebookIcon round size={32} />
          </FacebookShareButton>
          <TwitterShareButton title={title} url={shareUrl}>
            <TwitterIcon round size={32} />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon round size={32} />
          </LinkedinShareButton>
          <WhatsappShareButton separator=":: " title={title} url={shareUrl}>
            <WhatsappIcon round size={32} />
          </WhatsappShareButton>
          <TelegramShareButton url={shareUrl}>
            <TelegramIcon round size={32} />
          </TelegramShareButton>
          <RedditShareButton url={shareUrl}>
            <RedditIcon round size={32} />
          </RedditShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareableComponent;
