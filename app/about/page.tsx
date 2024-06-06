import Link from "next/link";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About Virtual Renovation</h1>
      <p>
        Virtual Renovation is an AI-driven interior design application that
        enables users to envision various design possibilities for their living
        spaces. The platform operates by having users submit a photograph of
        their room, which the AI then analyzes to generate an array of design
        concepts tailored to the specific layout and size of the space.
      </p>
      <p>
        Users can browse through these AI-produced designs as a source of
        inspiration for their home renovation projects. By offering a selection
        of personalized design options based on the user&apos;s unique room,
        Virtual Renovation aims to streamline the interior design process and
        assist individuals in creating their perfect living environment.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Featured In</h2>
        <div className="flex flex-wrap gap-8">
          <Link href="https://www.aitoolnet.com/" target="_blank">
            <img
              alt="aitoolnet.com"
              className="h-8"
              src="http://www.aitoolnet.com/static/assets/images/logo.svg"
            />
          </Link>
          <Link
            className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            href="https://raiday.ai/"
            title="nextui.org homepage"
          >
            <img alt="Featured On" className="h-8" src="/images/featured.png" />
          </Link>
          <Link
            className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            href="https://www.toolpilot.ai/"
            title="nextui.org homepage"
          >
            <img
              alt="Featured On"
              className="h-8"
              src="/images/featured-1.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
