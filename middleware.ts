import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((_auth, _req) => {
  // No protection is applied, all routes are accessible
});
