import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import InputData from "../data/inputData";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./table.css";
import { AddModal } from "./modals/addModal";
import { EditModal } from "./modals/editModal";
import { DelModal } from "./modals/delModal";

export default function DataGridDemo() {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleAddOpen = () => {
    setAddOpen(true);
  };
  const handleEditOpen = () => {
    setEditOpen(true);
  };
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  console.log(editOpen);
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "fiscal",
      headerName: "Fisical Year",
      width: 150,
      editable: true,
    },
    {
      field: "type",
      headerName: "Type",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 200,
      renderCell: () => {
        return (
          <>
            <Button
              onClick={handleEditOpen}
              startIcon={<EditIcon />}
              color="success"
              size="small"
            >
              Edit
            </Button>

            <Button
              onClick={handleDeleteOpen}
              startIcon={<DeleteIcon />}
              color="warning"
              size="small"
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ]);

  return (
    <>
      <h1>Crud sample</h1>
      <div className="header">
        <Button
          className="add"
          size="small"
          variant="contained"
          onClick={handleAddOpen}
        >
          ADD
        </Button>
        <AddModal open={addOpen} closeHandle={() => setAddOpen(false)} />
        <EditModal open={editOpen} closeHandle={() => setEditOpen(false)} />
        <DelModal open={deleteOpen} closeHandle={() => setDeleteOpen(false)} />
        <TextField
          className="search"
          label="Search"
          variant="filled"
          size="small"
        />
      </div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={InputData}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}
