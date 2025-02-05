import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (

    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
    <div className="flex items-center space-x-2 mb-10">
      <img 
       className="rounded-full h-20 w-20" 
       src="https://tse2.mm.bing.net/th?id=OIP.HyGh-4Z2m470B9gTA0Ke6AHaHa&pid=Api&P=0" 
       alt="" 
       />
      <h1 className="text-lg text-white font-bold"> Loading Computer Based Lottery Draw</h1>
    </div>
    <PropagateLoader color="white" size={30} />
  </div>
  )
}

export default Loading