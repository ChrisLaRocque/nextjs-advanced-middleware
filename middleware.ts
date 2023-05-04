import type { NextRequest } from "next/server";
import { MiddlewareRequest } from "@netlify/next";

export async function middleware(nextRequest: NextRequest) {
  console.log("middleware");
  const request = new MiddlewareRequest(nextRequest); // commenting this line out shows both logs
  console.log("middlewarerequest initialized");
}
