"use client";

import { CustomButtomProps } from "@/types";
import Image from "next/image"

const CustomButtom = ({title,containerStyles , 
  handleClick,btntype} : CustomButtomProps) => {
  return (
    <button 
      disabled={false}
      type={ btntype || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
     >
        <span className={`flex-1`}>
              {title}
        </span>
    </button>
  )
}

export default CustomButtom
