
import { useEffect, useState } from "react";


function getSavedValue(key,initialValue){
 const savedValue = JSON.parse(localStorage.getItem(key))
 
  if(savedValue)return savedValue

  if(initialValue instanceof Function)return initialValue()

  return initialValue
}

export default function useLocalStorage(key,initialValue){
  const [value, setvalue] = useState(()=>{
    return getSavedValue(key,initialValue)
  })

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[value])

return [value,setvalue]

}