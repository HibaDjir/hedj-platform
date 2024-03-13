import React from 'react'

function Resset_password() {
  return (
    <div dir= "rtl"className=" flex justify-items-center bg-taupe_palette max-w-[1240px] max-h-screen">
       
       <div
            
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
          >
            <div className="mt-10 flex flex-col gap-5 text-black_palette bg-transparent rounded-2xl">
              <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] rounded-2xl bg-[#F2EBDF]">
                <p className="text-fake_black bold text-3xl mb-10 flex justify-center">
                  إسترجاع كلمة السر{" "}
                </p>
                <form className="signup-form">
                  <label className="text-black-palette" htmlFor="password">
                    كلمة السر
                  </label>
      
                  <input
                    className="mb-2 mt-2 p-2 border rounded-2xl w-full"
                    type="password"
                    placeholder="كلمة السر"
                    required
                  />
      
                  <label className="text-black-palette" htmlFor="password">
                    تأكيد كلمة السر{" "}
                  </label>
      
                  <input
                    className="mb-2 mt-2 p-2 border rounded-2xl w-full"
                    type="password"
                    placeholder="تأكيد كلمة السر "
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
            </div>
          </div>
       </div>
    
  )
}

export default Resset_password
