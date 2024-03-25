import React from 'react';
import user from "../images/User.png";

function UserProfile() {
  return (
    <div dir='rtl' className='w-full h-screen flex justify-center items-center bg-white_palette'>
      <div className='max-w-[1240px] w-full px-4'>
        <div className='flex flex-col items-center'>
          <img src={user} alt="User Avatar" className="w-20 h-20 mb-4" />

          <div className=' w-full max-w-md'>
            <div className='mb-4'>
              <label htmlFor="firstName" className='block text-fake_black mb-1'>الإسم</label>
              <input
                id="firstName"
                className="text-black p-2 border rounded-xl border-fake_black w-full cursor-pointer"
                type="text"
                placeholder="الإسم"
                readOnly
                required
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="lastName" className='block text-fake_black mb-1'>اللقب</label>
              <input
                id="lastName"
                className="text-black p-2 border rounded-xl border-fake_black w-full cursor-pointer"
                type="text"
                placeholder="اللقب"
                readOnly
                required
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="email" className='block text-fake_black mb-1'>البريد اللإلكتروني</label>
              <input
                id="email"
                className="text-black p-2 border rounded-xl border-fake_black w-full cursor-pointer"
                type="email"
                placeholder="البريد اللإلكتروني"
                readOnly
                required
              />
            </div>

            <div className='mb-4'>
              <label htmlFor="password" className='block text-fake_black mb-1'>كلمة السر</label>
              <input
                id="password"
                className="text-black p-2 border rounded-xl border-fake_black w-full cursor-pointer"
                type="password"
                placeholder="********"
                readOnly
                required
              />
            </div>

          

          </div>
          <button className='bg-brown_palette text-white rounded-md shadow-sm px-4 py-2 mt-4 mx-auto w-[100px]'>
            تغيير
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
