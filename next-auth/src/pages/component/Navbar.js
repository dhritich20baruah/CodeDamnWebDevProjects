import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <ul className="flex m-3 space-x-4 font-bold">
                <Link href='/'>
                <li className="hover:cursor-pointer hover:text-red-600">Add</li>
                </Link>
                <Link href="/Display">
                <li className="hover:cursor-pointer hover:text-red-600">Show</li>
                </Link>
                <Link href="/Login">
                <li className="hover:cursor-pointer hover:text-red-600">Login</li>
                </Link>
            </ul>
        </div>
    )
}