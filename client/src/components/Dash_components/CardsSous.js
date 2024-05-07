import { useEffect, useState } from "react";
  import { GoPeople } from "react-icons/go";
  import { FaUserDoctor, FaPeopleGroup  } from "react-icons/fa6";
  import { SlUserFollowing } from "react-icons/sl";
  import { FaUsersBetweenLines } from "react-icons/fa6";
  import {jwtDecode} from 'jwt-decode';




  export default function Dashboard() {
	const [nbplaces, setNbplaces] = useState(0);
	const [nbcommunes, setNbcommunes] = useState(0);
	const [nbcandidat, setNbcandidats] = useState(0);



    const [daata, setDaata] = useState([]);
    const [userId, setUserId] = useState(null);

    const response = localStorage.getItem('user');
    const parsedRes = JSON.parse(response);
    const token = parsedRes.token
    const decodedToken = jwtDecode(token);
    useEffect(() => {
        if (decodedToken && decodedToken._id) {
          setUserId(decodedToken._id); // Store ID if found in decoded token
          fetchWilaya(userId);
          if(daata.wilaya){
          fetchCardsInfo (daata.wilaya)
          }
        }
       
          }, [userId,daata]);



          const fetchWilaya = async(id)=>{
            try {
                const response = await fetch(`http://localhost:3000/api/masterAdmin/getSaousAdminByuserId/${id}`);
                if (!response.ok) {
                  throw new Error('Failed to fetch Candidats');
                }
                const data = await response.json();
                setDaata(data);
              } catch (error) {
                console.error('Error fetching candidats:', error);
              }
          } 

          const fetchCardsInfo = async(wilaya)=>{
            try {
                const response = await fetch(`http://localhost:3000/api/dashboardStats/getCountsWilaya/${wilaya}`);
                if (!response.ok) {
                  throw new Error('Failed to fetch Cards Info');
                }
                const data = await response.json(); 
                setNbcandidats(data.candidaturesCount)
                setNbplaces(data.nbPlaces)
                setNbcommunes('26')
              } catch (error) {
                console.error('Error fetching Cards:', error);
              }
          } 




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
  
 
  
