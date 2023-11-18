"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Client() {
  useEffect(() => {
    signIn();
  }, []);
  return (
    <>
      <button onClick={() => signIn()}>signin</button>
    </>
  );
}
