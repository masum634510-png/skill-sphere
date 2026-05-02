import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
    baseURL: "https://skill-sphere-gamma.vercel.app",
});

export const { signIn, signOut, signUp, useSession } = authClient;

export default authClient;