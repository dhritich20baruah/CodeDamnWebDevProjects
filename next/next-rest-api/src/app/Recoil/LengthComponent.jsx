"use client"
import { useRecoilValue } from "recoil";
import { lengthState } from "../selectors/name";
import { toUpper } from "../selectors/name";

export default function LengthComponent(){
    const length = useRecoilValue(lengthState)
    const upper = useRecoilValue(toUpper)

    return (
        <>
            <h3 className="m-10 text-center text-lg">{length}</h3>
            <h3 className="m-10 text-center text-lg">{upper}</h3>
        </>
    )
}