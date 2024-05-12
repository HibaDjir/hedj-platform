import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../../components/Dash_components/shared/Sidebar";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavbarMed from "../../components/NavbarMed";

function ListePelerin() {
  const [selectedDate, setSelectedDate] = useState({});

  const handleChangeDate = (date, dataIndex) => {
    setSelectedDate({ ...selectedDate, [dataIndex]: date });
  };

  const columns = [
    {
      name: "Pelerin_name",
      label: "Candidat",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Wilaya",
      label: "Wilaya",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Commune",
      label: "Commune",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "gender",
      label: "Sexe",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Etat_civile",
      label: "Etat civile",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Groupe_sanguin",
      label: "Groupe sanguin",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "rendezVous",
      label: "Rendez Vous",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <div>
              <DatePicker
                className="text-black p-2 border rounded-xl border-fake_black w-full"
                selected={selectedDate[dataIndex]}
                onChange={(date) => handleChangeDate(date, dataIndex)}
                dateFormat="dd/MM/yyyy"
                placeholderText="rendez vous"
              />
            </div>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
  };

  const pelerins_data = [
    {
      id: "1",
      Pelerin_name: (
        <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
          Harrath Bouchra
        </Link>
      ),
      Wilaya: "chlef",
      Commune: "dik la commune",
      gender: "Femme",
      Etat_civile: "celibataire",
      Groupe_sanguin: "O+",
      
      rendezVous: "2024-05-10",
    },

    {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },

      {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },
      {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },
      {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },
      {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },
      {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },
      {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },
      {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },
      {
        id: "1",
        Pelerin_name: (
          <Link to="/pelerinsMed" style={{ color: "inherit", textDecoration: "inherit" }}>
            Harrath Bouchra
          </Link>
        ),
        Wilaya: "chlef",
        Commune: "dik la commune",
        gender: "Femme",
        Etat_civile: "celibataire",
        Groupe_sanguin: "O+",
        rendezVous: "2024-05-10",
      },
  ];

  return (
   <div className=" w-full h-full">
    <NavbarMed/>
   <div className="w-full overflow-hidden bg-white p-16  ">
     
          <MUIDataTable className="ml-8  rounded-sm border shadow-md border-gray-200 bg-[#FAF8F5] flex-col max-w-[1420px] justify-center"
            title={"Pelerins"}
            data={pelerins_data}
            columns={columns}
            options={options}
          />
       
     
    </div>
    </div>
  );
}

export default ListePelerin;
