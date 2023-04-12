import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken'
import Link from 'next/link'
import { useRouter } from "next/router";

export function getStaticProps(){
  return {
    props: { userCount: Math.random()},
    revalidate: 5
  }
}

export function getStaticPaths(){
  return {
    fallback: 'blocking', //or true or false
    paths: [
      {params: { id: 'product-1' } },
      {params: { id: 'product-2' } },
      {params: { id: 'product-3' } }
    ]
  }
}

export default function Home(props){
  const router = useRouter()

  if(router.isFallback){
  return <h1>Loading...</h1>
}

return <h1>Loaded</h1>
}