import React from "react";
import './Input.css'

function Input({className,type,placeholder}){
   return(
    <input type={type} className={className} placeholder={placeholder}></input>
   )
   }
   export default Input;