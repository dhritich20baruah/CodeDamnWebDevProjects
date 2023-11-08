"use client"
import { useRecoilState } from "recoil";
import { nameState } from "../atoms/name";

export default function InputComponent(){
    const [name, setName] = useRecoilState(nameState)
    
    let handleChangeInput = (e) => {
        setName(e.target.value);
    }

    return(
        <>
        <div className="flex justify-center">
            <input type="text" placeholder="Enter the string" onChange={handleChangeInput} value={name} className="border-2 border-black p-2 w-[50%]"/>
        </div>
        </>
    )
}