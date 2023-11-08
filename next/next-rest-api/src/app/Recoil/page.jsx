"use client"
import InputComponent from "./InputComponent"
import LengthComponent from "./LengthComponent"
import { RecoilRoot } from "recoil"
export default async function Recoil(){
    return(
        <RecoilRoot>
        <div>
            <h1 className="text-center m-10">RECOIL STATE MANAGEMENT</h1>    
            <InputComponent/>
            <LengthComponent/>    
        </div>
        </RecoilRoot>
    )
}