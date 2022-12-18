import { title } from "process";
import React from "react";
interface Props{
    title :string;
    onClick?:() => void;
}

function NavButton({title,onClick}:Props) {
  return (
    <button
    onClick={onClick}
    className= "bg-[#036756] text-white py-2 px-4 rounded font-bold">
    {title}
    </button>
  );
}

export default NavButton;