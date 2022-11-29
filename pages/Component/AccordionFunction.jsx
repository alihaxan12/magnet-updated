import { useState } from "react";
import {MdOutlineExpandLess, MdOutlineExpandMore} from 'react-icons/md';


const AccordionFunction = ({title,content}) => {
    const [isActive, setIsActive] = useState(false);
    return ( 
        <div className=" bg-[#14213D] placeholder-gray-1000">
      <div className="accordion">
        <div className="accordion-item border-b py-5  ">
          <div className="accordion-title flex justify-between"
          onClick={() => setIsActive(!isActive)}>
            <div className="text-white    text-xl">{title}</div>
            <div className="flex justify-between">
            <div className="order-last ease-in-out duration-150  text-white text-2xl">{!isActive && <MdOutlineExpandMore/>  }</div>
            <div className="order-last text-white text-2xl">{isActive &&   <MdOutlineExpandLess/> }</div>
            </div>
          </div> 
          {isActive && <div className="accordion-content py-6  text-white text-justify">{content}</div>}
        </div>
      </div>
    </div>
     
     );
}
 
export default AccordionFunction;