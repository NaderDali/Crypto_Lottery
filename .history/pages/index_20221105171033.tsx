import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import{
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  
} from "@thirdweb-dev/react";
import Login from "../components/Login";
//localhost:3000
const Home: NextPage = () => {
  const address=useAddress();
  const{contract, isLoading}= useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
    ); 
  
  console.log(address);
  if(!isLoading)
   return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
      <img 
        className="rounded-full h-20 w-20" 
        src="https://i.imgur.com/4h7mAu7.png" 
        alt="" />
      <h1 className="text-lg text-white font-bold"> Loading Computer Based Lottery Draw</h1>
      </div>
    </div>

  )
  if(!address) return (<Login />)



  return (
    <div className="bg-[#091818] min-h-screen flex flex-col">
      <Head>
        <title>Computer Based Lottery</title>
      </Head>

      <Header />
      <h1>
        
      </h1>

      

      
    </div>
  )
}

export default Home
