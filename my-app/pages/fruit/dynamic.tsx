import { GetStaticProps } from "next";
import path from "path";

//Execution on server
export const getStaticProps: GetStaticProps = async (context) =>{
    const fs = require('fs')

    const txt = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf8')

    return{
        props:{
            myFavNum: txt
        }
    }
}

export default function Dynamic(props){
    return <h1>Dynamic Number - {props.myFavNum}</h1>
}