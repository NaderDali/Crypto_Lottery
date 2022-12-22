import React from 'react'
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,

} from "@heroicons/react/24/solid"
function AdminControls() {
  return (
    <div className='text-white'>
        <h2>Admin Controls</h2>
        <p> Total Commission to be withdrawn:...</p>
        <div className=' flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
          <button>
            <StarIcon className="h-6 mx-auto mb-2" />
             Draw Winner
          </button>
          <button>
            <CurrencyDollarIcon className="h-6 mx-auto mb-2"/>
            Withdraw Commsion
          </button>
          <button>
            <ArrowPathIcon className='h-6 mx-auto mb-2'/>
             Restart Draw
          </button>
          <button>
            <ArrowUturnDownIcon className='h-6 mx-auto mb-2'/>
             Refund All
          </button>
        </div>
        
    </div>
  )
}

export default AdminControls