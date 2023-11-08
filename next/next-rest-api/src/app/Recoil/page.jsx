"use client"
import InputComponent from "./InputComponent"
import LengthComponent from "./LengthComponent"
import { RecoilRoot } from "recoil"
import Image from "next/image"
export default async function Recoil(){
    return(
        <RecoilRoot>
        <div>
            <h1 className="text-center m-10">RECOIL STATE MANAGEMENT</h1>    
            <InputComponent/>
            <LengthComponent/>  
            <Image src="/image/product1.jpg" width={500} height={500} alt="product"/>
        </div>
        </RecoilRoot>
    )
}