//import middleware from 'next-auth/middleware';

export { default } from 'next-auth/middleware';

// quando se usa o mioddleware do next-auth/midware, nao precisa deste
//export function middleware(request: NextRequest){
//    return NextResponse.redirect(new URL('/new-page', request.url))
//}

//export default middleware

export const config = {
    // *: zero or more
    //  +: one or more
    // ?: zero or one
    matcher: ['/users/:id*']
}