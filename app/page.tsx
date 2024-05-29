// import { auth } from "@clerk/nextjs/server";

import Landing from "@/components/landing";
import UseCases from "@/components/sections/use-cases";
import ButtonGlow from "@/components/button-glow";

export default async function Home() {
  // Get the userId from auth() -- if null, the user is not signed in
  // const { userId } = auth();

  // if (!userId) {
  //   return null;
  // }

  return (
    <section className="flex flex-col justify-center items-center">
      <Landing />

      <div className="flex justify-center items-center">
        <UseCases />
      </div>
      <div>
        <ButtonGlow />
      </div>
    </section>
  );
}
