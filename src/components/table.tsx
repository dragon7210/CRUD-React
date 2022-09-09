import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Box, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import InputData from "../data/inputData";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { AddModal } from "./modals/addModal";
import { EditModal } from "./modals/editModal";
import { DelModal } from "./modals/delModal";
import { AddTypeModal } from "./modals/addTypeModal";

import cookie from "react-cookies";

import "./table.css";

type ItemProps = {
  id: number;
  name: string;
  fiscal: number;
  type: string;
};

export default function DataGridDemo() {
  const [addOpen, setAddOpen] = useState(false);
  const [addTypeOpen, setAddTypeOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [rows, setRows] = useState<ItemProps[]>([]);
  const rowRef = useRef<any>(null);

  rowRef.current = rows;

  const [editdata, setEditdata] = useState<any>({
    id: -1,
    name: "",
    fiscal: 0,
    type: "",
  });
  const [deldata, setDeldata] = useState<any>({
    name: "",
    fiscal: 0,
    type: "",
  });
  const [search, setSearch] = useState("");

  const onChange = (e: any) => {
    setSearch(e.target.value);
  };

  const searchRows = useCallback(
    (rowsVal: any[]) => {
      const temp = rowsVal.filter((row: any) =>
        row.name.toLowerCase().includes(search.toLowerCase())
      );
      return temp;
    },
    [search]
  );

  const handleAddOpen = () => {
    setAddOpen(true);
  };
  const handleAddTypeOpen = () => {
    setAddTypeOpen(true);
  };
  const handleEditOpen = (id: number) => {
    const index = rowRef.current.findIndex((row: any) => row.id === id);
    setEditdata(rowRef.current[index]);
    setEditOpen(true);
  };
  const handleDeleteOpen = (id: number) => {
    const index = rowRef.current.findIndex((row: any) => row.id === id);
    setDeldata(rowRef.current[index]);
    setDeleteOpen(true);
  };

  const handleDataChange = (values: any) => {
    const temp: any = rows.map((row) => row);
    const index = rows.findIndex((row: any) => row.id === values.id);
    temp[index] = values;
    setRows(temp);
  };

  const handleDataDel = (values: any) => {
    const temp: any = rows.map((row) => row);
    const index = rows.findIndex((row: any) => row.id === values.id);
    temp.splice(index, 1);
    setRows(temp);
  };

  const handleDataAdd = (name: string, fiscal: number, type: string) => {
    const newRows = rows.map((item) => item);
    const minId = newRows.reduce(
      (a: number, b: ItemProps) => (a > b.id ? a : b.id),
      0
    );
    newRows.push({
      id: minId + 1,
      name,
      fiscal,
      type,
    });

    setRows(newRows);
  };
  const columns = useMemo(
    () => [
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
        renderCell: (i: any) => {
          return (
            <>
              <Button
                onClick={() => handleEditOpen(i.id)}
                startIcon={<EditIcon />}
                color="success"
                size="small"
              >
                Edit
              </Button>

              <Button
                onClick={() => handleDeleteOpen(i.id)}
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
    ],
    []
  );

  useEffect(() => {
    let tableRows = cookie.load("table-data");
    if (!tableRows) {
      cookie.save("table-data", InputData);
      tableRows = [...InputData];
    }
    setRows(tableRows);
  }, []);

  useEffect(() => {
    if (rows.length) {
      cookie.save("table-data", rows);
    }
  }, [rows]);

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
        <Button
          className="add"
          size="small"
          variant="contained"
          onClick={handleAddTypeOpen}
        >
          ADD Type
        </Button>
        <AddModal
          open={addOpen}
          handleDataAdd={handleDataAdd}
          closeHandle={() => setAddOpen(false)}
        />
        <AddTypeModal
          open={addTypeOpen}
          closeHandle={() => setAddTypeOpen(false)}
        />
        <EditModal
          open={editOpen}
          data={editdata}
          handleDataChange={handleDataChange}
          closeHandle={() => setEditOpen(false)}
        />
        <DelModal
          open={deleteOpen}
          handleDataDel={handleDataDel}
          data={deldata}
          closeHandle={() => setDeleteOpen(false)}
        />
        <TextField
          className="search"
          label="Search"
          variant="filled"
          size="small"
          name="search"
          onChange={onChange}
        />
      </div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={searchRows(rows)}
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
