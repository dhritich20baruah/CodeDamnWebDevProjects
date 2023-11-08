"use client"
import { useRecoilValue } from "recoil";
import { lengthState } from "../selectors/name";

export default function LengthComponent(){
    const length = useRecoilValue(lengthState)

    return (
        <>
            <h3 className="m-10 text-center text-lg">{length}</h3>
        </>
    )
}