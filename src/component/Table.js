import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, CardHeader, CardContent } from "@mui/material";
import Input from "./Input";
export default function CustomTable(props) {
 const [value, setValue] = React.useState("");
 const handleFilter = (e) => {
  if (!props.setRows) return console.log("Please Provider Setter Function");
  if (!props?.allRows) return console.log("Please Provider All Data in new State");
  let searchValue = e.target.value;
  setValue(searchValue);
  let updatedData = [];
  if (searchValue.length) {
   updatedData = props?.allRows.filter((row) => Object.keys(row).some((key) => row[key].toString().search(searchValue) !== -1));
   props.setRows(updatedData);
  } else {
   props.setRows(props.allRows);
  }
 };
 return (
  <Card sx={{ marginBottom: 2 }}>
   <CardHeader title={props.title || ""} />
   <CardContent>
    {props.search && <Input sx={{ mb: 3 }} placeholder="Filter" variant="standard" value={value} onChange={handleFilter} />}
    <DataGrid autoHeight rows={props.rows} columns={props.columns} pageSize={10} rowsPerPageOptions={[5]} />
   </CardContent>
  </Card>
 );
}
