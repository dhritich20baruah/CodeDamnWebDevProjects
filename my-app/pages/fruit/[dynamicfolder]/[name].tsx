import { useRouter } from "next/router"

export default function FruitName(){
    const router = useRouter()

    function takeMeHome(){
        router.replace('/')
        // push places the page in history stack and router.replace() replaces the page in the history stack so if u press the back button you won't  go back to the same page
    }

    return(
         <h1>
             Hello Dynamic {router.query.dynamicfolder} {router.query.name}
             <p>
                 <button onClick={takeMeHome}>Home</button>
             </p>
        </h1>
    )
}