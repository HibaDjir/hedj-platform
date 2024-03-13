import React from 'react'
import { Link } from 'react-router-dom'
function Email_confirmation() {
  return (
    <div>
        <div className=" flex justify-items-center bg-taupe_palette max-w-[1240px] max-h-screen">
       
       <div
            
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
          >
            <div className="mt-10 flex flex-col gap-5 text-black_palette bg-transparent rounded-2xl">
              <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] rounded-2xl bg-[#F2EBDF]">
                <p className="text-fake_black bold text-3xl mb-10 flex justify-center">
               VEUILLEZ SAISIR VOTRE MAIL
               </p>
                <form >
                  <label className="text-black-palette" htmlFor="email">
                 EMAIL </label>
      
                  <input
                    className="mb-2 mt-2 p-2 border rounded-2xl w-full"
                    type="email"
                    placeholder="veuillez saisir votre mail"
                    required
                  />
      
      
                  <button
                    type="submit"
                    className="bg-[#D4A373] text-white hover:bg-[#AD7946] p-2 rounded-2xl w-full mt-2"
                  >
                    <Link to= "/resset_pssw">
                CONFIRMER</Link></button>
                </form>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Email_confirmation
