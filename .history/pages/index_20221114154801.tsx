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
import Loading from "../components/Loading";
//localhost:3000
const Home: NextPage = () => {
  const address=useAddress();
  const{contract, isLoading}= useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
    ); 
  
  console.log(address);
  
  if(isLoading) return <Loading/>;
 
  if(!address) return <Login />;


  return (
    <div className="bg-[#091818] min-h-screen flex flex-col">
      <Head>
        <title>Computer Based Lottery</title>
      </Head>

      <Header />
      <h1>
        
      </h1>
      {/*the Next draw box*/}
      <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-2">
        <div className="stats-container">
          <h1 className="text-5xl text-white font-semibold text-center"> The Next Draw</h1>

         <div className="flex justify-between p-2 space-x-2">
           <div className="stats">
             <h2 className="text-sm"> Total Pool</h2>
             <p className="text-xl">0.1 MATIC</p>
           </div>
           <div className="stats">
            <h2 className="text-sm">Tickets Remaining</h2>
            <p className="text-xl"> 100</p>
           </div>
         </div>

           {/*Count Dwon timer*/}
           {/*....*/}

        </div>
        <div className="stats-container space-y-2">
          <div className="stats-container">
            <div>
              <h2>Price Per Ticket</h2>
              <p> 0.01 MATIC</p>
            </div>
          </div>
        </div>
      </div>
      {/*the Price per ticket box*/}
      <div>
        <div>

        </div>
      </div>


      

      
    </div>
  )
}

export default Home
