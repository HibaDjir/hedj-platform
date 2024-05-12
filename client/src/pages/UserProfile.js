import React , { useEffect, useState } from 'react';
import user from "../images/User.png";

import axios from 'axios';

function UserProfile() {

  const [nom, setNom] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [adrmail, setAdrmail] = useState(null);
  //var nom='', prenom='', adrmail='';
  //const [id_user_n, setIdUser] = useState(null);

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    const token = tokenCookie ? tokenCookie.split('=')[1] : null;
    axios.get('http://localhost:3000/TestLogin?fieldName=token&fieldValue='+token)
            .then(response => {
              axios.get('http://localhost:3000/api/users/'+response.data)
                      .then(responseF => {
                        getUserConn(response.data);
                        //alert(responseF.data)
                      })
                      .catch(error => {
                          console.error('Erreur lors de la récupération des options :', error);
                      });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });
    
  }, []);
  const getUserConn = async (id_user) => {
    try {
        const response = await fetch('http://localhost:3000/api/users/'+id_user);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        //alert(jsonData.email)
        setNom(jsonData.lastName);setPrenom(jsonData.firstName);setAdrmail(jsonData.email)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
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
                value={prenom}
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
                value={nom}
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
                value={adrmail}
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
