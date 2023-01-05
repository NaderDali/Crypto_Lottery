import React from 'react'
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,

} from "@heroicons/react/24/solid"
import {
   useContract,
   useContractRead,
   useContractWrite, 
  } from '@thirdweb-dev/react'
import { ethers } from 'ethers';
import { currency } from '../styles/constants';
import toast from '../react-hot-toast-main/src';
function AdminControls() {

  const { contract , isLoading} = useContract (
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
   );

   const {data : totalCommission} = useContractRead(
    contract,
    "operatorTotalCommission"
   );
   const { mutateAsync: DrawWinnerTicket } = useContractWrite(
    contract,
     "DrawWinnerTicket"
     );

   const {mutateAsync : RefundAll } =useContractWrite(
     contract,
    "RefundAll"
   );
   const {mutateAsync : restartDraw} =useContractWrite(
     contract,
    "restartDraw"
    );

    const {mutateAsync:WithdrawCommission} =useContractWrite(
      contract,
      "WithdrawCommission"
    );

    const drawWinner= async() => {
      const notification=toast.loading("Picking a Winner...");

      try{ 
        const data = await DrawWinnerTicket([{}]);
        toast.success("A winner has been chosen", {
          id:notification,
        });
        console.info("contract call success",data);

      } catch(err) { 
        toast.error("something went wrong, please try again", {
          id:notification,
        });
        console.error("contarct call failure", err);
      }

    }
    const onWithdrawCommission= async() => {
      const notification=toast.loading("Withdrawing commsion...");
      try {
        const data = await WithdrawCommission([{}]);
        toast.success("Your withdraw has been successful", {
          id:notification,
        });
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }
  

    
    const onRestartDraw= async() => {
      const notification=toast.loading("Restarting draw...");

      try { 
        const data = await restartDraw ([{}]);
        toast.success("Draw restarted successfully", {
          id:notification,
        });
        console.info("contract call success",data);

      } catch(err) { 
        toast.error("something went wrong, please try again", {
          id:notification,
        });
        console.error("contarct call failure", err);
      }

    }
    const onRefundAll= async() => {
      const notification=toast.loading("Refunding all...");

      try { 
        const data = await RefundAll ([{}]);
        toast.success("All refunded successfully", {
          id:notification,
        });
        console.info("contract call success",data);

      } catch(err) { 
        toast.error("something went wrong, please try again", {
          id:notification,
        });
        console.error("contarct call failure", err);
      }

    }

  return (
    <div className='text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border'>
        <h2 className='font-bold'>Admin Controls</h2>
        <p className='mb-5'> 
           Total Commission to be withdrawn:{" "}
           {totalCommission &&
             ethers.utils.formatEther(totalCommission?.toString())}{" "}
           {currency}
        </p>

        <div className=' flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
          <button onClick={drawWinner} className='admin-button'>
            <StarIcon className="h-6 mx-auto mb-2" />
            Draw Winner
          </button>
          <button onClick={onWithdrawCommission} className='admin-button'>
            <CurrencyDollarIcon className="h-6 mx-auto mb-2"/>
            Withdraw Commission
          </button>
          <button onClick={onRestartDraw} className='admin-button'>
            <ArrowPathIcon className='h-6 mx-auto mb-2'/>
            Restart Draw
          </button>
          <button onClick={onRefundAll} className='admin-button'>
            <ArrowUturnDownIcon className='h-6 mx-auto mb-2'/>
            Refund All
          </button>
        </div>
        
    </div>
  )
}

export default AdminControls