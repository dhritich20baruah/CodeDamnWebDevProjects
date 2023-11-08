import { products } from "./products"
import Image from "next/image"

export default function Shop(){
    return(
        <>
        <div className="flex justify-evenly m-10 ">
        {products.map((item)=>{
            return(
                <ul key={item.id} className="text-center rounded-md shadow-lg shadow-gray-700 p-10 hover:cursor-pointer hover:shadow-black">
                    <li><Image src={item.image} alt="" width={500} height={500} className="w-56 h-56 object-contain"/></li>
                    <li>{item.name}</li>
                    <li>Rs. {item.price}</li>
                </ul>
            )
        })}
        </div>

        <div className="flex justify-center">
        <p className="p-2 w-fit bg-orange-600 m-10 rounded-md text-center text-white">CART</p>
        </div>
        </>
    )
}