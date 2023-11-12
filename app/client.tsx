"use client";

import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Client() {
  const [res, setRes] = useState("");
  async function makeRequest() {
    const r = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`);
    setRes(await r.json());
  }
  return (
    <div>
      <div>
        <button onClick={() => signIn()}>sign in</button>
        <button onClick={() => signOut()}>sign out</button>
      </div>
      <button onClick={makeRequest}>make request</button>
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </div>
  );
}
