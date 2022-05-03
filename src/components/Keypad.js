// Code Keypad Component Here
import react from "react";


export default function Keypad(){
    function handleOnchange(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={handleOnchange}></input>
        </div>
    )
}