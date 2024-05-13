







import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Add from "../images/Untitled.png";

import axios from 'axios';

function TirageAge({ onClose }) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "0.15rem",
      borderRadius: "0.5rem",
      width: "100%",
    }),
  };

  const modalRef = useRef(null);
  const [criterias, setCriterias] = useState([{ max: "", min: "", chance: "" }]);
  const [criteriaCount, setCriteriaCount] = useState(1);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleAddCriteria = () => {
    if (criteriaCount < 3) {
      setCriterias([...criterias, { max: "", min: "", chance: "" }]);
      setCriteriaCount(criteriaCount + 1);
      //alert(criterias[0].max)
    }
  };

  const handleAgeChange = (index, type, value) => {
    const updatedCriterias = [...criterias];
    updatedCriterias[index][type] = value;
    setCriterias(updatedCriterias);
  };

  const UpdateAgeBracket = async () => {
    try {
      let minAge1=0, maxAge1=0, chance1=0, minAge2=0, maxAge2=0, chance2=0, minAge3=0, maxAge3=0, chance3=0;
      let i = 1;let ttChance = 0;
      for (let criteria of criterias) {
        if(i === 1) {
          minAge1=criteria.min; maxAge1=criteria.max; chance1=criteria.chance; i+=1;
        }else if(i === 2) {
          minAge2=criteria.min; maxAge2=criteria.max; chance2=criteria.chance; i+=1;
        }else{
          minAge3=criteria.min; maxAge3=criteria.max; chance3=criteria.chance; i+=1;
        }
        ttChance+=parseFloat(criteria.chance);
      }
      if(ttChance > 100) {
        alert("la somme des chances ne doit pas dépassé 100%");
        ttChance = 0;
      }
      else{
        const response = await axios.put('http://localhost:3000/api/tirage/update', { 
           minAge1, maxAge1, chance1, minAge2, maxAge2, chance2, minAge3, maxAge3, chance3
        });
        alert("Enregistrement avec succées");
      }
    } catch (error) {
      alert(error);
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col justify-center py-6 px-7 mx-auto w-[400px] rounded-3xl bg-[#F7F6F3]">
        <div className="grid grid-cols-1 gap-y-2">
          {criterias.map((criteria, index) => (
            <div key={index}>
              <div className="w-full flex justify-center items-center ">
              <div className="w-full flex flex-col mr-5 mt-0">
                <label className="text-fake_black mb-1" htmlFor={`max-age-${index}`}>
                  Age maximum:
                </label>
                <input
                  id={`max-age-${index}`}
                  className="text-black p-1 border rounded-md border-fake_black w-full"
                  type="number"
                  placeholder=" Age  "
                  value={criteria.max}
                  onChange={(e) => handleAgeChange(index, "max", e.target.value)}
                  required
                />
              </div>



              <div className="w-full flex flex-col ">
                <label className="text-fake_black mb-1" htmlFor={`min-age-${index}`}>
                  Age minimum:
                </label>
                <input
                  id={`min-age-${index}`}
                  className="text-black p-1 border rounded-md border-fake_black w-full"
                  type="number"
                  placeholder=" Age  "
                  value={criteria.min}
                  onChange={(e) => handleAgeChange(index, "min", e.target.value)}
                  required
                />
              </div>
        </div>

              <div className="w-full flex flex-col mt-2">
                <label className="text-fake_black mb-1" htmlFor={`chance-${index}`}>
                  Chance:
                </label>
                <input
                  id={`chance-${index}`}
                  className="text-black p-1 border rounded-md border-fake_black w-full"
                  type="number"
                  placeholder="chance "
                  value={criteria.chance}
                  onChange={(e) => handleAgeChange(index, "chance", e.target.value)}
                  required
                />
              </div>

              {index === 1 && <hr className="my-2 border-t border-gray-300" />}
            </div>
          ))}
        </div>

        <button
          className="text-[#1D1D1B] text-sm font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353] border p-2 mt-4 items-center x-auto w-[120px] h-[40px] mx-auto hover:bg-[#AD7946]"
          onClick={UpdateAgeBracket}>
          Ajouter
        </button>

        <div className="flex flex-col items-center mt-2">
          <img
            src={Add}
            className="w-12 h-12 my-2 transition-transform hover:scale-110 cursor-pointer"
            alt="Add"
            onClick={handleAddCriteria}
            style={{ display: criteriaCount >= 3 ? "none" : "block" }}
          />
        </div>
      </div>
    </div>
  );
}

export default TirageAge;
