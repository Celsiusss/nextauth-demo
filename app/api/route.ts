import { auth } from "../auth";

export const GET = auth((req) => {
  return Response.json(req.auth);
});
