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
  
  if(!isLoading) return <Loading/>;
 
  if(!address) return <Login />;


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
