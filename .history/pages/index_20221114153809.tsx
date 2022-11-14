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
      <div>
        <div>
          <h1 className="text-5xl text-white font-semibold text-center"> The Next Draw</h1>

         <div className="flex justify-between p-2 space-x-2">
           <div className="Stats">
             <h2 className="text-sm"> Total Pool</h2>
             <p className="text-xl">0.1 MATIC</p>
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
