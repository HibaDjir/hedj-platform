import React, {useState} from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../../components/Dash_components/shared/Sidebar";
import carteccp from "./Carteccp"
import virementccp from "./Virementccp"
function Paiment() {
  const handleRowClick = (rowData) => {
    const paiment = rowData[1]; // Assuming "Paiment" is the second column
    if (paiment === "carte ccp") {
      window.location.href = "/Carteccp"; // Redirect to "/carteccp" route
    } else if (paiment === "virement postale") {
      window.location.href = "/Virementccp"; // Redirect to "/virementccp" route
    } else {
      console.error("Unsupported Paiment type:", paiment);
    }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  }
  const columns = [
    { name: "Nom_Prenom", label: "Nom Prenom", options: { filter: false, sort: true } },
    { name: "Paiment", label: "Type de paiment", options: { filter: true, sort: true } },
    { name: "Decision", label: "Décision", options: { filter: true, sort: true } },
  ];

  const options = {
    filterType: "checkbox",
    onRowClick: handleRowClick,
  };

  const PaimentData = [
    { Nom_Prenom: "Harrath Bouchra", Paiment: "carte ccp", Decision: "en attente" },
    { Nom_Prenom: "Harrath djamila", Paiment: "virement postale", Decision: " en attente" },
    { Nom_Prenom: "Harrath Bouchra", Paiment: "carte ccp", Decision: "en attente" },
    { Nom_Prenom: "Harrath djamila", Paiment: "virement postale", Decision: " en attente" },
    { Nom_Prenom: "Harrath Bouchra", Paiment: "carte ccp", Decision: "en attente" },
    { Nom_Prenom: "Harrath djamila", Paiment: "virement postale", Decision: " en attente" },
    { Nom_Prenom: "Harrath Bouchra", Paiment: "carte ccp", Decision: "en attente" },
    { Nom_Prenom: "Harrath djamila", Paiment: "virement postale", Decision: " en attente" },
    { Nom_Prenom: "Harrath Bouchra", Paiment: "carte ccp", Decision: "en attente" },
    { Nom_Prenom: "Harrath djamila", Paiment: "virement postale", Decision: " en attente" },
    { Nom_Prenom: "Harrath Bouchra", Paiment: "carte ccp", Decision: "en attente" },
    { Nom_Prenom: "Harrath djamila", Paiment: "virement postale", Decision: " en attente" },
    { Nom_Prenom: "Harrath Bouchra", Paiment: "carte ccp", Decision: "en attente" },
    { Nom_Prenom: "Harrath djamila", Paiment: "virement postale", Decision: " en attente" },
   
  ];

  return (

    <div className='w-full flex overflow-hidden
'><div className={`fixed  top-0 left-0 h-screen z-50 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0  sm:w-auto`} >
<Sidebar />
</div>
<div className=" w-full flex flex-col">
        <div className={`flex flex-col flex-1 pl-10 sm:pl-14 md:pl-20 lg:pl-64 p-3 gap-9 transition-margin ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
<div >
      <MUIDataTable title={"Gestion des Paiment"} data={PaimentData} columns={columns} options={options} />
    </div>
</div>

</div>



    
    <button onClick={toggleSidebar} aria-label="Toggle Sidebar" className="fixed top-5 left-5 z-50 p-3 bg-[#FAF8F5] rounded-full text-gray-600 sm:hidden">
          {isSidebarOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
    </button>
    </div>
    </div>
  );
}

export default Paiment;
