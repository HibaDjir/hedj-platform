import { useEffect, useState } from "react";
  import { GoPeople } from "react-icons/go";
  import { FaUserDoctor, FaPeopleGroup  } from "react-icons/fa6";
  import { SlUserFollowing } from "react-icons/sl";
  import { FaUsersBetweenLines } from "react-icons/fa6";
  export default function Dashboard() {
	const [nbplaces, setNbplaces] = useState(0);
	const [nbcommunes, setNbcommunes] = useState(0);
	const [nbcandidat, setNbcandidats] = useState(0);
	const [nomdoc, setNomdoc] = useState();
    const [nbDoc, setNbDoc] = useState();

	useEffect(() => {
        setNomdoc('Charles')
        setNbcandidats("123")
        setNbcommunes("234")
        setNbplaces("66")
        setNbDoc("leclerc")
	}, []);
  


return (
  <div>
    <div >
<div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
  
    <div class="flex items-center bg-white rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl">
        <div class="p-4 bg-[#FAF8F5]"><div class="p-4 bg-[#FAF8F5] flex items-center justify-center">
    <FaUsersBetweenLines className="h-12 w-12 text-black" />
</div></div>
        <div class="px-2 text-gray-700">
            <h3 class="text-sm font-bold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Nombre de Places</h3>
            <p class="text-3xl">{nbplaces}</p>
        </div>
    </div>
    <div class="flex items-center bg- rounded-2xl overflow-hidden shadow  transfrom transition duration-500 hover:scale-105  hover:rounded-2xl">
        <div class="p-4 bg-[#FAF8F5]"><div class="p-4 bg-[#FAF8F5] flex items-center justify-center">
    <GoPeople  className="h-12 w-12 text-black" />
</div></div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm font-bold text-[#C09455] tracking-wider">Nombre de communes</h3>
            <p class="text-3xl">{nbcommunes}</p>
        </div>
    </div>
    <div class="flex items-center bg-white rounded-2xl overflow-hidden shadow  transfrom transition duration-500 hover:scale-105  hover:rounded-2xl">
        <div class="p-4 bg-[#FAF8F5]"><div class="p-4 bg-[#FAF8F5] flex items-center justify-center">
    <FaPeopleGroup className="h-12 w-12 text-black" />
</div></div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider font-bold text-[#C09455]">Nombre de candidats</h3>
            <p class="text-3xl">{nbcandidat}</p>
        </div>
    </div>
    <div class="flex items-center bg-white rounded-2xl overflow-hidden shadow  transfrom transition duration-500 hover:scale-105  hover:rounded-2xl">
        <div class="p-4 bg-[#FAF8F5]"><div class="p-4 bg-[#FAF8F5] flex items-center justify-center">
    <FaUserDoctor className="h-12 w-12 text-black" />
</div></div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm flex tracking-wider font-bold text-[#C09455]">Le médecin</h3>
            <p class="text-xl"></p>
        </div>
    </div>
</div>
</div>
      </div>
    );
  }
  
 
  
