
import { NextResponse, type NextRequest  } from "next/server"

export function middleware(request: NextRequest){

    const response = NextResponse.next()

    !request.cookies.has('theme') && response.cookies.set('theme','dark')

    return response
}