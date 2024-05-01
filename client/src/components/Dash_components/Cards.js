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
  <div className="gap-5  flex-col">
  <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black">Tableau de Bord</h2>
    <div className="flex items-end space-x-2 ">
      
      <div className="flex space-x-14 ">
        <div></div>
        <DashboardCard
          icon={<GoPeople className="h-6 w-6"/>}
          title={"Tous les Administrateurs" }
          value={orders}
        />
        <DashboardCard
          icon={<FaUserDoctor className="h-5 w-5"/>}
          title={"Tous les médecins"}
          value={inventory}
        />
        <DashboardCard
          icon={<FaPeopleGroup className="h-5 w-5"/>}
          title={"Tous les candidats"}
          value={customers}
        />
        <DashboardCard
          icon={<SlUserFollowing className="h-5 w-5"/>}
          title={"Tout les pèlerins"}
          value={revenue}
        />
      </div>
    </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
    return (
      <div className="bg-[#FAF8F5] rounded-lg shadow-lg p-4">
        <div className="flex items-center px-4 py-5 sm:p-6 transfrom transition duration-500 hover:scale-125  hover:rounded-2xl">
          <div className="mr-5 ">{icon}</div>
          <div>
            <h3 className=" font-semibold">{title}</h3>
            <p className="text-base align-middle">{value}</p>
          </div>
        </div>
      </div>
    );
  }
  
 
  
