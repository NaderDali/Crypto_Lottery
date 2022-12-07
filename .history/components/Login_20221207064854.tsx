import React from "react"
import{useMetamask} from "@thirdweb-dev/react";

function Login() {
    const connectWithMetamask=useMetamask();

  return (
    <div className="bg-[#091B18] min-h-screen flex flew-col items-center justify-center text-center">
        <div className="flex flex-col items-center mb-10">
            <img className="rounded-full h56 w-56 mb-10 "
            src="https://tse2.mm.bing.net/th?id=OIP.HyGh-4Z2m470B9gTA0Ke6AHaHa&pid=Api&P=0" 
            alt=""/>
            <h1 className="text-6xl text-white font-bold" >Computer Based Lottery</h1>
            <h2 className="text-white">Get started by logging in with your MetaMask</h2>

            <button 
                onClick={connectWithMetamask}
                className="bg-white px-8 py-5 mt-10 rounded-lg shadown-lg font-bold">
                Login with Metamask 
            </button>
        </div>
    </div>
  )
}

export default Login