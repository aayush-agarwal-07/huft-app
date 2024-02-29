import {useSelector} from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const CartItems = ({ItemData,Quantity,Weight,Pack,Price})=>{
    return(
        <div className="flex flex-row">
            <div className="flex flex-row gap-8 ">
                <div className="  ">
                    <img className="rounded-md max-w-20 max-h-20 md:max-w-36 md:max-h-32" src={`${ItemData.images[0]}`}></img>
                </div>
                <div className="flex flex-col gap-4 md:flex-row ">
                    <div className="md:max-w-xl  lg:max-w-3xl">
                    <h2 className="text-md md:text-xl lg:text-2xl font-semibold ">{ItemData.title}</h2>
                    {
                        Weight?<p className="text-sm">{Weight}</p>:<></>
                    }
                                        {
                        Pack?<p className="text-sm">{Pack}</p>:<></>
                    }
                    </div>
                    <div className="flex flex-row gap-2 text-2xl">
                        <FaMinus className="mt-1 text-orange-500"/> 
                        <p className="text-gray-600">{Quantity}</p>
                        <FaPlus className="mt-1 text-orange-500"/>
                    </div>
                </div>
            </div>    
            <div>
                <div>   
                    <MdDeleteOutline/>
                </div>
                <div>
                    <p> Rs. {Price*Quantity}</p>
                </div>
            </div>
        </div>
    )
}

const CartPage = () => {

    const CartData = useSelector((store)=>store.cart.items);
    console.log(CartData);
  return (
    <div className="max-w-[85rem] m-auto px-8 py-8 md:py-24">

        <div className="flex flex-col justify-between md:flex-row ">
            <h2 className="text-3xl font-semibold">Your Cart</h2>
            <h2  className="text-xl cursor-pointer">
                Continue Shopping.</h2>
        {/* Heading */}
        </div>
        <div className=" border-b-2 my-10 border-gray-200">
                    {/* Body */}
                    
            <div>{/* Title */}</div>
            <div className="      flex flex-col gap-8">
                
            {
                CartData.map((e,index)=>{
                    return(<CartItems key={index } ItemData={e[0]} Quantity={e[1]} Weight={e[2]} Pack={e[3]} Price={e[4]}/>)
                    // return(<h2 key={index}>{e[0].title}</h2>)

                    // 
                })
            }

            </div>
            <div className="flex flex-row justify-center md:justify-end">
                <div className="py-6 flex flex-col gap-3">
                        {/* Total Price And Next filed */}
                        <div className="flex flex-row gap-3 md:justify-end ">
                            <h3 className="font-semibold text-[25px] ">Subtotal:</h3>
                            <span className="font-semibold text-[25px]">{}$1900</span>  
                        </div>
                        <p>Tax included and shipping calculated at checkout.</p>
                        <button className="bg-indigo-950 px-12 py-2 text-lg text-white">Check out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage