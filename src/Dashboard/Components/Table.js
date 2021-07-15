import MUIDataTable from "mui-datatables";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TablePatients() {
  const [patients, getPatients] = useState("");
  const url = "http://localhost:5000/patients";
  useEffect(() => {
    getAllPatients();
  }, []);
  const getAllPatients = () => {
    axios
      .get(url)
      .then((response) => {
        const allPatients = response.data.patients;
        getPatients(allPatients);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  const columns = [
    {
      name: "First Name",
      options: {
        filter: true,
      },
    },
    {
      name: "Last Name",
      options: {
        filter: true,
      },
    },
    {
      name: "Location",
      options: {
        filter: false,
      },
    },
    {
      name: "Age",
      options: {
        filter: true,
      },
    },

    {
      name: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value === "false") {
            return (
              <FormControlLabel
                label={value ? "Vaccinate" : "Vaccinated"}
                value={value ? "True" : "False"}
                control={
                  <Switch
                    color="primary"
                    checked={!value}
                    value={value ? "false" : "true"}
                  />
                }
                onChange={(event) => {
                  updateValue(event.target.value === "false" ? false : false);
                  console.log(tableMeta.rowData);
                }}
              />
            );
          }
        },
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "stacked",
  };

  return (
    <div>
      {patients.length > 1
        ? console.log(patients)
        : console.log("Nothing found")}
    </div>
    // <MUIDataTable
    //   {...patients.map((item, idx) => {
    //     if (item.vaccinated === "false") {
    //       return [
    //         item.first_name,
    //         item.last_name,
    //         item.location,
    //         item.age,
    //         item.vaccinated,
    //       ];
    //     } else {
    //       return <h1>No Item Found</h1>;
    //     }
    //   })}
    //   columns={columns}
    //   options={options}
    // />
  );
}
