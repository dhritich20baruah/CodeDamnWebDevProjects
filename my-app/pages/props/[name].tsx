import { useRouter } from 'next/router'

import { GetStaticPaths, GetStaticProps } from "next";

//Execution on server
export const getStaticProps: GetStaticProps = async (context) =>{
    const fs = require('fs')

    return{
        props:{
            myFavNum: Math.random()
        }
    }
}

//getStaticProps runs at build time. It does not run at runtime.

export const getStaticPaths: GetStaticPaths = async() => {
    return{
        paths: [{ params: {name: 'hello'}},
                { params: {name: 'world'}}],
        fallback: true
    }
}

export default function Myfruit(props){
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading...</h1>
    }

    return <h1>Hello - {props.myFavNum}</h1>
}