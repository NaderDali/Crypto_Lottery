import React from 'react'

function Header() {
  return (
    <div> 
        <div className="flex items-center space-x-2">
            
           <img
           className="rounded-full h-20 w-20"
            src="https://i.imgur.com/4h7mAu7.png" 
            alt=""
            />
        
        <div>
           <h1 className="text-lg text-white font-bold">Nader Dali</h1>
            <p className="text-xs text-emerald-500 truncate">User...</p>
        </div>
        </div>
    </div>
  )
}

export default Header;