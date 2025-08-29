// theo maurino
// cors.js

import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [
    "https://prattic.org",
    "https://prattic.lol",
    "https://prattic.fun",
    "https://prattic.social",

    // REMOVE LATER
    "http://localhost:3000",
]

export function withCors(req, res) {
    // req : NextRequest , res : NextResponse

    const origin = req.headers.get("origin") ?? "";

    if(allowedOrigins.includes(origin)) {
        res.headers.set("Access-Control-Allow-Origin", origin);
        res.headers.set("Access-Control-Allow-Credentials", "true");

    }

    res.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    return res;
}