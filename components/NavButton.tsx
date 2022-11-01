import { title } from "process";
import React from "react";
interface Props{
    title :string;
}

function NavButton({title}:Props) {
  return (
    <button className= "bg-[#036756] text-white py-2 px-4 rounded font-bold">
        {title}
    </button>
  );
}

export default NavButton;