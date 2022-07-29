import { NextResponse } from "next/server"
function middleware(req, ev) {
    if(parseInt(req.page.params?.productid) > 10 || !parseInt(req.page.params?.productid) ){
        return NextResponse.rewrite('http://localhost:3000')
    }
    return NextResponse.next()
}

export default middleware