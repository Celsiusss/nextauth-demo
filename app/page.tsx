import { auth } from "./auth";
import Client from "./client";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return <Client />;
  }
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
