import { useRouter } from "next/router";

export default function MyFruit(){
    const router = useRouter()

    console.log(router.query)

    return <h1>Catch all Routes</h1>
}