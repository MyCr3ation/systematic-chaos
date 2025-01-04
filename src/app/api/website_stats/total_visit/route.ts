import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    const data = await fetch(
      "https://systematic-chaos.hasura.app/api/rest/website_stats/total_visit",
      {
        cache: "no-store",
      }
    ).then((res) => res.json());

    const count = data.website_stats_by_pk.count;

    const mutate = await fetch(
      "https://systematic-chaos.hasura.app/api/rest/website_stats/total_visit",
      {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({
          object: {
            count: count + 1,
          },
        }),
      }
    ).then((res) => res.json());

    return NextResponse.json(mutate.update_website_stats_by_pk);
  } catch (error) {
    return NextResponse.json({ count: 500, id: "total_visit" });
  }
}
