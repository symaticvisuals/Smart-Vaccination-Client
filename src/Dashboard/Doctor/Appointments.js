import * as React from "react";
import { Typography } from "@material-ui/core";

import Table from "../Components/Table";

function Appointments() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Typography variant="h1" style={{ display: "flex" }}>
          Appointments
        </Typography>
      </div>
      <div style={{ width: "100%" }}>
        <Table />
      </div>
    </div>
  );
}
export default Appointments;
