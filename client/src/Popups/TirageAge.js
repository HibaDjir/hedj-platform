// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Add from "../images/Untitled.png";

// function TirageAge({ onClose }) {
//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       padding: "0.15rem",
//       borderRadius: "0.5rem",
//       width: "100%",
//     }),
//   };

//   const modalRef = useRef(null);
//   const closeModal = (e) => {
//     if (modalRef.current === e.target) {
//       onClose();
//     }
//   };

 


//   return (
//     <div ref={modalRef}
//       onClick={closeModal}
//       className="fixed inset-0 z-[9999] bg-fixed  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//     >
//       <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] h-[300px] rounded-3xl bg-[#F7F6F3]">
     

        
        

//         <div className="w-full flex flex-col mt-2 ">
//           <label className="text-fake_black mb-2" htmlFor="nationalité">
//             Age maximum:
//           </label>
//           <input
//             className="text-black p-2 border rounded-md  border-fake_black  w-full"
//             type="number"
//             name="number"
//             placeholder=" Age  "
//             required
//           />
//         </div>


//         <div className="w-full flex flex-col mt-2 ">
//           <label className="text-fake_black mb-2" htmlFor="nationalité">
//             Age minimum:
//           </label>
//           <input
//             className="text-black p-2 border rounded-md  border-fake_black  w-full"
//             type="number"
//             name="number"
//             placeholder=" Age  "
//             required
//           />
//         </div>

   
//         <button className='  text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353]
// border p-2  mt-6 items-center x-auto w-[150px]  h-[50] mx-auto hover:bg-[#AD7946]'>

//           Confirmer
//         </button>

//         <div className="flex flex-col items-center">
//             <Link to="">
//               <img
//                 src={Add}
//                 className="w-16 h-16 mb-2 transition-transform hover:scale-110"
//                 alt="Add"
//               />
//             </Link>
//           </div>
//       </div>
//     </div>
//   );
// }

// export default TirageAge;
















//














// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Add from "../images/Untitled.png";

// function TirageAge({ onClose }) {
//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       padding: "0.15rem",
//       borderRadius: "0.5rem",
//       width: "100%",
//     }),
//   };

//   const modalRef = useRef(null);
//   const [ages, setAges] = useState([{ max: "", min: "" }]);

//   const closeModal = (e) => {
//     if (modalRef.current === e.target) {
//       onClose();
//     }
//   };

//   const handleAddField = () => {
//     setAges([...ages, { max: "", min: "" }]);
//   };

//   const handleAgeChange = (index, type, value) => {
//     const updatedAges = [...ages];
//     updatedAges[index][type] = value;
//     setAges(updatedAges);
//   };

//   return (
//     <div
//       ref={modalRef}
//       onClick={closeModal}
//       className="fixed inset-0 z-[9999] bg-fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//     >
//       <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[450px]  rounded-3xl bg-[#F7F6F3]">
//         {ages.map((age, index) => (
//           <div key={index}>
//             <div className="w-full flex flex-col mt-2">
//               <label className="text-fake_black mb-2" htmlFor={`max-age-${index}`}>
//                 Age maximum:
//               </label>
//               <input
//                 id={`max-age-${index}`}
//                 className="text-black p-2 border rounded-md border-fake_black w-full"
//                 type="number"
//                 placeholder=" Age  "
//                 value={age.max}
//                 onChange={(e) => handleAgeChange(index, "max", e.target.value)}
//                 required
//               />
//             </div>

//             <div className="w-full flex flex-col mt-2">
//               <label className="text-fake_black mb-2" htmlFor={`min-age-${index}`}>
//                 Age minimum:
//               </label>
//               <input
//                 id={`min-age-${index}`}
//                 className="text-black p-2 border rounded-md border-fake_black w-full"
//                 type="number"
//                 placeholder=" Age  "
//                 value={age.min}
//                 onChange={(e) => handleAgeChange(index, "min", e.target.value)}
//                 required
//               />
//             </div>

//             {index < ages.length - 1 && <hr className="my-4 border-t border-gray-300" />}
//           </div>
//         ))}

//         <button
//           className="text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353] border p-2 mt-6 items-center x-auto w-[150px] h-[50] mx-auto hover:bg-[#AD7946]"
          
//         >
//           Ajouter
//         </button>

//         <div className="flex flex-col items-center">
//           <img
//             src={Add}
//             className="w-16 h-16 my-4 transition-transform hover:scale-110 cursor-pointer"
//             alt="Add"
//             onClick={handleAddField}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TirageAge;


























// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Add from "../images/Untitled.png";

// function TirageAge({ onClose }) {
//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       padding: "0.15rem",
//       borderRadius: "0.5rem",
//       width: "100%",
//     }),
//   };

//   const modalRef = useRef(null);
//   const [criterias, setCriterias] = useState([{ max: "", min: "" }]);

//   const closeModal = (e) => {
//     if (modalRef.current === e.target) {
//       onClose();
//     }
//   };

//   const handleAddCriteria = () => {
//     setCriterias([...criterias, { max: "", min: "" }]);
//   };

//   const handleAgeChange = (index, type, value) => {
//     const updatedCriterias = [...criterias];
//     updatedCriterias[index][type] = value;
//     setCriterias(updatedCriterias);
//   };

//   return (
//     <div
//       ref={modalRef}
//       onClick={closeModal}
//       className="fixed inset-0 z-[9999] bg-fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//     >
//       <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] rounded-3xl bg-[#F7F6F3]">
//         <div className="grid grid-cols-1 gap-y-4">
//           {criterias.map((criteria, index) => (
//             <div key={index}>
//               <div className="w-full flex flex-col mt-2">
//                 <label className="text-fake_black mb-2" htmlFor={`max-age-${index}`}>
//                   Age maximum:
//                 </label>
//                 <input
//                   id={`max-age-${index}`}
//                   className="text-black p-2 border rounded-md border-fake_black w-full"
//                   type="number"
//                   placeholder=" Age  "
//                   value={criteria.max}
//                   onChange={(e) => handleAgeChange(index, "max", e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="w-full flex flex-col mt-2">
//                 <label className="text-fake_black mb-2" htmlFor={`min-age-${index}`}>
//                   Age minimum:
//                 </label>
//                 <input
//                   id={`min-age-${index}`}
//                   className="text-black p-2 border rounded-md border-fake_black w-full"
//                   type="number"
//                   placeholder=" Age  "
//                   value={criteria.min}
//                   onChange={(e) => handleAgeChange(index, "min", e.target.value)}
//                   required
//                 />
//               </div>

//               {index === 1 && <hr className="my-4 border-t border-gray-300" />}
//             </div>
//           ))}
//         </div>

//         <button
//           className="text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353] border p-2 mt-6 items-center x-auto w-[150px] h-[50] mx-auto hover:bg-[#AD7946]"
         
//         >
//           Ajouter
//         </button>

//         <div className="flex flex-col items-center">
//           <img
//             src={Add}
//             className="w-16 h-16 my-4 transition-transform hover:scale-110 cursor-pointer"
//             alt="Add"
//             onClick={handleAddCriteria}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TirageAge;









// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Add from "../images/Untitled.png";

// function TirageAge({ onClose }) {
//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       padding: "0.15rem",
//       borderRadius: "0.5rem",
//       width: "100%",
//     }),
//   };

//   const modalRef = useRef(null);
//   const [criterias, setCriterias] = useState([{ max: "", min: "" }]);

//   const closeModal = (e) => {
//     if (modalRef.current === e.target) {
//       onClose();
//     }
//   };

//   const handleAddCriteria = () => {
//     setCriterias([...criterias, { max: "", min: "" }]);
//   };

//   const handleAgeChange = (index, type, value) => {
//     const updatedCriterias = [...criterias];
//     updatedCriterias[index][type] = value;
//     setCriterias(updatedCriterias);
//   };

//   return (
//     <div
//       ref={modalRef}
//       onClick={closeModal}
//       className="fixed inset-0 z-[9999] bg-fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//     >
//       <div className="flex flex-col justify-center py-8 px-4 mx-auto w-[400px] rounded-3xl bg-[#F7F6F3]">
//         <div className="grid grid-cols-1 gap-y-4">
//           {criterias.map((criteria, index) => (
//             <div key={index}>
//               <div className="w-full flex flex-col mt-2">
//                 <label className="text-fake_black mb-2" htmlFor={`max-age-${index}`}>
//                   Age maximum:
//                 </label>
//                 <input
//                   id={`max-age-${index}`}
//                   className="text-black p-2 border rounded-md border-fake_black w-full"
//                   type="number"
//                   placeholder=" Age  "
//                   value={criteria.max}
//                   onChange={(e) => handleAgeChange(index, "max", e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="w-full flex flex-col mt-2">
//                 <label className="text-fake_black mb-2" htmlFor={`min-age-${index}`}>
//                   Age minimum:
//                 </label>
//                 <input
//                   id={`min-age-${index}`}
//                   className="text-black p-2 border rounded-md border-fake_black w-full"
//                   type="number"
//                   placeholder=" Age  "
//                   value={criteria.min}
//                   onChange={(e) => handleAgeChange(index, "min", e.target.value)}
//                   required
//                 />
//               </div>

//               {index === 1 && <hr className="my-4 border-t border-gray-300" />}
//             </div>
//           ))}
//         </div>

//         <button
//           className="text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353] border p-2 mt-6 items-center x-auto w-[150px] h-[50] mx-auto hover:bg-[#AD7946]"
//           onClick={handleAddCriteria}
//         >
//           Ajouter
//         </button>

//         <div className="flex flex-col items-center">
//           <img
//             src={Add}
//             className="w-16 h-16 my-4 transition-transform hover:scale-110 cursor-pointer"
//             alt="Add"
//             onClick={handleAddCriteria}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TirageAge;
















import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Add from "../images/Untitled.png";

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
  const [criterias, setCriterias] = useState([{ max: "", min: "" }]);
  const [criteriaCount, setCriteriaCount] = useState(1);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleAddCriteria = () => {
    if (criteriaCount < 3) {
      setCriterias([...criterias, { max: "", min: "" }]);
      setCriteriaCount(criteriaCount + 1);
    }
  };

  const handleAgeChange = (index, type, value) => {
    const updatedCriterias = [...criterias];
    updatedCriterias[index][type] = value;
    setCriterias(updatedCriterias);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col justify-center py-4 px-2 mx-auto w-[320px] rounded-3xl bg-[#F7F6F3]">
        <div className="grid grid-cols-1 gap-y-2">
          {criterias.map((criteria, index) => (
            <div key={index}>
              <div className="w-full flex flex-col">
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

              <div className="w-full flex flex-col mt-2">
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

              {index === 1 && <hr className="my-2 border-t border-gray-300" />}
            </div>
          ))}
        </div>

        <button
          className="text-[#1D1D1B] text-sm font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353] border p-2 mt-4 items-center x-auto w-[120px] h-[40px] mx-auto hover:bg-[#AD7946]"
          onClick={handleAddCriteria}
          
        >
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
