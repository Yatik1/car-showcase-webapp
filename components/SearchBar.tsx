"use client"

import { useState } from "react"
import { SearchManufacturer } from "."
import Image from "next/image"
import { useRouter } from "next/navigation"


 const SearchButton = ({otherClasses} : {otherClasses : string}) => {
   <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
     <Image 
         src={'/magnifying.svg'}
         alt={'search-icon'}
         width={40}
         height={40}
         className="object-contain" />
   </button>
 }

const SearchBar = () => {
    
    const [manufacturer , setManufacturer] = useState('')
    const [model , setModel] = useState('')

    const router = useRouter();

    const handleSearch = ( e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(manufacturer.trim() === '' && model.trim() === '') {
        return alert("Please provide inputs!!")
      }

      updateSearchParams(model.toLowerCase() , manufacturer.toLowerCase())

    }
    
   const updateSearchParams = (model:string , manufacturer : string) => {
      
      const searchParams = new URLSearchParams(window.location.search);

      if(model) {
         searchParams.set("model" , model)
      } else {
         searchParams.delete("model")
      }

      if(manufacturer) {
        searchParams.set("manufacturer" , manufacturer)
     } else {
        searchParams.delete("manufacturer")
     }

     const newPathname = `${window.location.pathname} ? ${searchParams.toString()}`
     
     router.push(newPathname)
   }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
               manufacturer={manufacturer}
               setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar
