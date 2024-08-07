import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);

    return new Response("Error occurred", {
      status: 400,
    });
  }

  // Handle user creation
  if (evt.type === "user.created") {
    const { id, email_addresses, ...attributes } = evt.data;

    if (!email_addresses || email_addresses.length === 0) {
      return new Response("No email address provided", { status: 400 });
    }

    try {
      await sql`
        INSERT INTO users (clerk_id, email, created_at)
        VALUES (${id}, ${email_addresses[0].email_address}, NOW())
      `;
      console.log("User created in database");
    } catch (error) {
      console.error("Error creating user in database:", error);

      return new Response("Error creating user in database", { status: 500 });
    }
  }

  console.log(`Webhook with an ID of ${evt.data.id} and type of ${evt.type}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
