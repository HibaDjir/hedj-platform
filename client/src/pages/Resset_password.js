import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar_psw";
function Resset_password() {
  return (
    <div dir="rtl" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-md w-full bg-white_palette  shadow-3xl rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-10">جاري إسترجاع كلمة السر</h2>
  <form className="w-full max-w-md">
    <label htmlFor="password" className="text-black-palette">
      كلمة السر
    </label>
    <input
      className="mb-2 mt-2 p-2 border rounded-2xl w-full"
      type="password"
      placeholder="كلمة السر"
      required
    />
    <label htmlFor="confirm-password" className="text-black-palette">
      تأكيد كلمة السر
    </label>
    <input
      className="mb-2 mt-2 p-2 border rounded-2xl w-full"
      type="password"
      placeholder="تأكيد كلمة السر"
      required
    />
    <button
      type="submit"
      className="bg-[#D4A373] text-white hover:bg-[#AD7946] p-2 rounded-2xl w-full mt-2"
    >
      تأكيد
    </button>
  </form>



      </div>
      <section className="fixed bottom-0 left-0 w-full bg-taupe_palette text-white py-4 text-center">
        <h1>Footer</h1>
        <p>khoutti hadda hebbit n3emreh ktiba</p>
        <p>ma 3labalich 3lah banli chbab hak</p>
        <p>Facebook and netflix inspiration</p>
        <p>ma t'qelqouch oumbe3 nelgaled tbel3it chbab</p>

      </section>
    </div>
    
  )
}

export default Resset_password
