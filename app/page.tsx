import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { auth } from "./auth";
import Client from "./client";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Client />
    </div>
  );
}
