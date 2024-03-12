import React from "react";
import { Link } from "react-router-dom";
import kaaba from "../images/kaaba (2).png";
import horloge from "../images/horloge_makkah.jpeg";

function Login() {
  return (
    <div dir="rtl" className=" w-full bg-white  page-content">
      <div className=" mx-auto grid md:grid-cols-2">
        <img
          className="w-full mx-auto"
          alt="kaaba"
          src={horloge}
          style={{ marginRight: "-100px", marginTop: "-50px" }}
        ></img>

        <div className="flex flex-col justify-center py-16 px-4  mx-auto  w-[500px] h-{100vh} ">
          <p className="text-vert_foncé bold text-3xl mb-4 flex justify-center ">
            إسترجاع كلمة السر{" "}
          </p>
          <form className="signup-form ">

          


            <label className="text-vert_claire " htmlFor="password">
              كلمة السر
            </label>

            <input
              className="mb-2  mt-2 p-2 border border-vert_claire  rounded-2xl w-full"
              type="password"
              placeholder="كلمة السر"
              required
            />

            <label className="text-vert_claire " htmlFor="password">
              تأكيد كلمة السر{" "}
            </label>

            <input
              className="mb-2  mt-2 p-2 border border-vert_claire  rounded-2xl w-full"
              type="password"
              placeholder="تأكيد كلمة السر "
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-green-900 to-green-700 text-dorée p-2 rounded-2xl  w-full mt-2"
            >
              تأكيد
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
