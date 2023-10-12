"use client";

import { CustomButtomProps } from "@/types";
import Image from "next/image"

const CustomButtom = ({title,containerStyles , 
  handleClick,btntype,textStyles,rightIcon} : CustomButtomProps) => {
  return (
    <button 
      disabled={false}
      type={ btntype || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
     >
        <span className={`flex-1 ${textStyles}`}>
              {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
             <Image src={rightIcon} alt="right icon" fill className="object-contain" />
          </div>
        ) }
    </button>
  )
}

export default CustomButtom
