import { Orders } from "../Tempdata";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";

export default function Orderspage() {
    return (

        <div className="h-[90vh]">
            {Orders.map((order, index) => (
                <div key={index} className="flex items-center p-3 justify-between border mx-2 my-2   hover:bg-gray-100 hover:shadow-lg gap-2">
                    <div className="flex items-center gap-2">
                        <p>{index + 1}.</p>
                        <BiSolidPurchaseTagAlt />
                        <p className="text-[16px]">{order.name}</p>
                        <p className="text-[14px]">({order.address})</p>
                        <p className="text-[12px]">{order.phone}</p>
                    </div>
                    <div>
                        <p>₹{order.price}</p>
                    </div>
                </div>
            ))}

        </div>

    )
}