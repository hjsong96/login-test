"use client";
import { SessionProvider, useSession } from "next-auth/react";

export default function AuthContext({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
