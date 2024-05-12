import React from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../../components/Dash_components/shared/Sidebar";

function Paiment() {
  const handleRowClick = (rowData) => {
    const paiment = rowData[1]; // Assuming "Paiment" is the second column
    if (paiment === "carte ccp") {
      window.location.href = "/carteccp"; // Redirect to "/carteccp" route
    } else if (paiment === "virement postale") {
      window.location.href = "/virementccp"; // Redirect to "/virementccp" route
    } else {
      console.error("Unsupported Paiment type:", paiment);
    }
  };

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

    <div className='w-full  overflow-hidden
'>
        <Sidebar/>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 flex-col max-w-[1420px]  ml-64 ">

       
<div className="max-w-[1420px]">
      <MUIDataTable title={"Gestion des Paiment"} data={PaimentData} columns={columns} options={options} />
    </div>
    </div>
    </div>
  );
}

export default Paiment;
