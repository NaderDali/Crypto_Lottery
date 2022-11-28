import React from 'react'
import {useContract, useContractRead} from "@thirdweb-dev/react"
import Countdown from 'react-countdown';

type Props={
    hours:number;
    minutes:number;
    seconds:number;
    completed:boolean;
};
function CountDownTimer() {
    const {contract } =useContract (
        process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
     );
     const { data: expiration, isLoading: isLoadingExpiration } =useContractRead(
            contract,
            "expiration"
     );

     const renderer = ({hours,minutes,seconds,completed}: Props)=> {
        if(false) { 
            return (
              <div>
                 <h2>Tickets Sales have now closed for this Draw</h2>
              </div>
            )

        } else {
            return (
            <div>
                <h3 className="text-white text-sm mb-2 italic"> Time Remaining</h3>
            </div>
            )
        }

     }

             
  return <div>
    <Countdown date={ new Date(expiration * 1000)} renderer={renderer} />
     

  </div>;
}

export default CountDownTimer