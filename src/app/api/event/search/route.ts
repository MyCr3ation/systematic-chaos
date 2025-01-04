import { events } from "../../db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";
  const data = events.filter((event) =>
    event.name.toLowerCase().includes(query.toLowerCase())
  );
  return NextResponse.json(data);
}
