import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema/auth";
import { env } from "@/env";
import { anonymous } from "better-auth/plugins";
import { CONSTANTS } from "@/config/constants";
import { uuidv7 } from "uuidv7";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: CONSTANTS.SESSION_CACHE_MAX_AGE,
    },
  },
  advanced: {
    cookiePrefix: CONSTANTS.COOKIE_PREFIX,
    useSecureCookies: process.env.NODE_ENV === "production",
    database: {
      generateId: () => uuidv7(),
    },
  },
  plugins: [anonymous()],
});
