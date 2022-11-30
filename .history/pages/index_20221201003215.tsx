import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import{
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractRead,
  useContractWrite,

 
  
} from "@thirdweb-dev/react";
import Login from "../components/Login";
import Loading from "../components/Loading";
import { useState } from "react";
import { ethers } from "ethers";
import { currency } from "../styles/constants";
import CountDownTimer from "../components/CountDownTimer";
import toast from "react-hot-toast";
//localhost:3000
const Home: NextPage = () => {
  const address=useAddress();
  const [quantity, setQuantity] =useState<number>(1)
  const{contract, isLoading}= useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
    ); 
    const { data: expiration } = useContractRead(
      contract,
      "expiration"
    );
    const {data: remainingTickets} =useContractRead (
      contract,
      "RemainingTickets"
    );
    const {data : CurrentWinningReward} =useContractRead(
      contract,
      "CurrentWinningReward"
    );
    const {data: ticketPrice}=useContractRead(
      contract,
      "ticketPrice"
    );
    const { data: ticketCommission } = useContractRead(
      contract, 
      "ticketCommission"
    );

    const {mutateAsync: BuyTickets} = useContractWrite(
      contract, 
      "BuyTickets"
      );
    
    const handleClick = async() => {
      if(!ticketPrice) return ;

      const notification =toast.loading("Buying your tickets...");
      try {
        const data = await BuyTickets([
          {
            value: ethers.utils.parseEther(
              (
                Number(ethers.utils.formatEther(ticketPrice)) * quantity
              ).toString()
              ),
            
          },
        ]);
        
      
        
        console.info("contract call success",data);

      } catch(err){
      
        console.error("contract call failure",err)
      }
    };

  
  
  
  if(isLoading) return <Loading/>;
 
  if(!address) return <Login />;


  return (
    <div className="bg-[#091818] min-h-screen flex flex-col">
      <Head>
        <title>Computer Based Lottery</title>
      </Head>
       

      <Header />
      
        
      
      {/*the Next draw box*/}
      <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5 ">
        <div className="stats-container">
          <h1 className="text-5xl text-white font-semibold text-center"> The Next Draw</h1>

         <div className="flex justify-between p-2 space-x-2">
           <div className="stats">
             <h2 className="text-sm"> Total Pool</h2>
             <p className="text-xl">
              {CurrentWinningReward && ethers.utils.formatEther
              (CurrentWinningReward.toString()
              )}{""}
              {currency}
             </p>
           </div>
           <div className="stats">
            <h2 className="text-sm">Tickets Remaining</h2>
            <p className="text-xl">{remainingTickets?.toNumber()}</p>
           </div>
         </div>

           {/*Count Dwon timer*/}
           <div className="mt-5 mb-3">
            <CountDownTimer/>


           </div>

        </div>
        <div className="stats-container space-y-2">
          <div className="stats-container">
            <div className="flex justify-between items-center text-white pb-2 ">
              <h2>Price Per Ticket</h2>
              <p>
                {ticketPrice &&
                 ethers.utils.formatEther(ticketPrice?.toString())}
                 {""}
                 {currency} 
              </p>
            </div>
            <div className="flex text-white items-center space-x-2 bg-[#091B18] border-[#004337] border p-4">
              <p>TICKETS</p>
              <input 
                className=" flex w-full bg-transparent text-right outline-none"
                 type="number"
                 min={1}
                 max={10}
                 value={quantity}
                 onChange={(e) => setQuantity(Number(e.target.value))}
              
              />
            </div>
            <div className="space-y-2 mt-5">
              <div className="flex items-center justify-between text-emerald-300 tex-sm italic font-extrabold">
                <p> Total Cost Of Tickets</p>
                <p>{ticketPrice &&
                    Number(
                     ethers.utils.formatEther(ticketPrice?.toString())
                     ) *quantity} {""}
                      {currency}
                 </p>
              </div>
              <div className="flex items-center justify-between text-emerald-300 tex-xs italic ">
                <p> Service Fees</p>
                <p>{ticketCommission &&
                 ethers.utils.formatEther(ticketCommission?.toString())}
                 {""}
                 {currency}
                 </p>
              </div>
              <div className="flex items-center justify-between text-emerald-300 tex-xs italic ">
                <p> + Network Fees</p>
                <p> TBC</p>
              </div>
            </div>
            <button
              disabled={
                expiration?.toString() < Date.now().toString
                () || remainingTickets?.toNumber() === 0 
              }
              onClick={handleClick}
              className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md text-white shadow-xl disabled:from-gray-600  disabled:cursor-not-allowed "> 
              Buy Tickets
              </button>
          </div>
        </div>
      </div>
      <div>
        
      </div>


      

      
    </div>
  )
}

export default Home
