import { useEffect, useState } from "react";
  import { getCustomers, getInventory, getOrders, getRevenue } from "../../pages/Dash_pages/API";
  import { GoPeople } from "react-icons/go";
  import { FaUserDoctor, FaPeopleGroup  } from "react-icons/fa6";
  import { SlUserFollowing } from "react-icons/sl";

  export default function Dashboard() {
	const [orders, setOrders] = useState(0);
	const [inventory, setInventory] = useState(0);
	const [customers, setCustomers] = useState(0);
	const [revenue, setRevenue] = useState(0);
  
	useEffect(() => {
	  getOrders().then((res) => {
		setOrders(res.total);
		setRevenue(res.discountedTotal);
	  });
	  getInventory().then((res) => {
		setInventory(res.total);
	  });
	  getCustomers().then((res) => {
		setCustomers(res.total);
	  });
	}, []);
  


return (
  <div>
    <div >
<div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
  
    <div class="flex items-center bg-white rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl">
        <div class="p-4 bg-[#FAF8F5]"><div class="p-4 bg-[#FAF8F5] flex items-center justify-center">
    <GoPeople className="h-12 w-12 text-black" />
</div></div>
        <div class="px-2 text-gray-700">
            <h3 class="text-sm font-bold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tous les Administrateurs</h3>
            <p class="text-3xl">{orders}</p>
        </div>
    </div>
    <div class="flex items-center bg- rounded-2xl overflow-hidden shadow  transfrom transition duration-500 hover:scale-105  hover:rounded-2xl">
        <div class="p-4 bg-[#FAF8F5]"><div class="p-4 bg-[#FAF8F5] flex items-center justify-center">
    <FaUserDoctor className="h-12 w-12 text-black" />
</div></div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm font-bold text-[#C09455] tracking-wider">Tous les Médecins</h3>
            <p class="text-3xl">{inventory}</p>
        </div>
    </div>
    <div class="flex items-center bg-white rounded-2xl overflow-hidden shadow  transfrom transition duration-500 hover:scale-105  hover:rounded-2xl">
        <div class="p-4 bg-[#FAF8F5]"><div class="p-4 bg-[#FAF8F5] flex items-center justify-center">
    <FaPeopleGroup className="h-12 w-12 text-black" />
</div></div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider font-bold text-[#C09455]">Tous les candidats</h3>
            <p class="text-3xl">{customers}</p>
        </div>
    </div>
    <div class="flex items-center bg-white rounded-2xl overflow-hidden shadow  transfrom transition duration-500 hover:scale-105  hover:rounded-2xl">
        <div class="p-4 bg-[#FAF8F5]"><div class="p-4 bg-[#FAF8F5] flex items-center justify-center">
    <SlUserFollowing className="h-12 w-12 text-black" />
</div></div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm flex tracking-wider font-bold text-[#C09455]">Tous les pèlerins</h3>
            <p class="text-3xl">{revenue}</p>
        </div>
    </div>
</div>
</div>
      </div>
    );
  }
  
 
  
