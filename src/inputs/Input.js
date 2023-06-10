import React from "react";
import './Input.css'

function Input({className,type,placeholder,register}){
   return(
    <input type={type} className={className} autoComplete="off" {...register} placeholder={placeholder}></input>
   )
   }
   export default Input;