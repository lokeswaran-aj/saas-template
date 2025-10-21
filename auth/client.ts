import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();

export const signInWithGoogle = async (redirectTo?: string) => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: redirectTo ?? "/app",
  });
};
