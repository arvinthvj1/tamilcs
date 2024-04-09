import { NextResponse } from "next/server";


export function middleware(req){
    // console.log("entered middleware")
    const token = req.headers.get("Authorization");
    // if(token === null){
    //     return NextResponse.redirect(new URL("/login", req.url))
    // }
    return NextResponse.next();
}