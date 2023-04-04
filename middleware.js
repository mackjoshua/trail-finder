import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
});

const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(5, "60 s")
});

export default async function middleware( request, event ){
    const ip = request.ip ?? "127.0.01";
    const { success, pending, limit, reset, remaining } = await ratelimit.limit(ip);
    return success ? NextResponse.next() : NextResponse.redirect(new URL("/blocked"))
}

module.exports = { middleware, config: { matcher: "/"}};
