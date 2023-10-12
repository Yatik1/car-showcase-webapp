"use client"

import { CarProps } from "@/types"
import Image from "next/image"
import { useState } from "react"


interface CarCardProps {
    car: CarProps;
}

const CarCard = ({car}:CarCardProps) => {

  const { city_mpg , year , make,model,transmission, drive } = car

  return (
    <div className="car-card group">
       
    </div>
  )
}

export default CarCard
