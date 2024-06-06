import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400">
                See{" "}
                <Link
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                  href="https://www.meetava.io/"
                >
                  Meetava
                </Link>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <Link
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                {" | "}
                <Link
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                  href="/terms-of-service"
                >
                  Terms of Service
                </Link>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Powered by{" "}
                <Link
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-semibold text-lg"
                  href="https://www.meetava.io/"
                >
                  Digital Transformations
                </Link>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <a
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                  href="mailto:info@virtualrenovation.ai"
                >
                  info@virtualrenovation.ai
                </a>
              </p>
              <div className="flex justify-center md:justify-end">
                <Link
                  aria-label="Facebook"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mx-2"
                  href="https://www.tiktok.com/@virtualrenovationai"
                >
                  Tiktok
                </Link>
                <Link
                  aria-label="Twitter"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mx-2"
                  href="https://www.twitter.com/virtualrenovation"
                >
                  Twitter
                </Link>
                <Link
                  aria-label="LinkedIn"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mx-2"
                  href="https://www.youtube.com/channel/UClwNs1jJXg_lIQKcqNZhCuw"
                >
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
