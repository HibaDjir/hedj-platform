import React from 'react';
import user from "../images/User.png";

function UserProfile() {
  return (
    <div dir='rtl' className='w-full  h-screen flex justify-center items-center bg-white_palette'>
     <div className='max-w-[1240px] w-auto flex flex-col justify-center items-center'>
         <img src={user}/>
         <div className=' flex justify-between'>
<div className=' flex flex-col w-full' >
<p className='text-fake_black '>الإسم</p>
</div>
<div className=' flex flex-col w-full' >
<p className='text-fake_black '> اللقب</p>
</div>
         </div>
         </div>  
    </div>
  )
}

export default UserProfile
