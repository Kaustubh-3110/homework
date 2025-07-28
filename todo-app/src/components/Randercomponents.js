import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoTrashBin } from "react-icons/io5";
export default function Randercomponents({ todo, index, completehandllar  , iscomplet, id, deleteHandler, edithandlar }) {
  return (
    <div className='flex items-center '>
      <div className='flex items-center justify-between w-[500px]'>
        <p  style={{textDecoration: iscomplet ? 'line-through' : 'none', backgroundColor:iscomplet ? 'lightgreen' : 'transparent'}}>{index + 1}.{todo}</p>
        <div className='flex gap-2'>
          <IoIosCheckmarkCircle onClick={()=>completehandllar(id)}  color='green' size={25} />
          <HiMiniPencilSquare onClick={()=>edithandlar(id) } color='blue' size={25} />
          <IoTrashBin onClick={()=>deleteHandler(id)} color='red' size={25} />
        </div>
      </div>
    </div>
  )
}