import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  data: any;
  closeHandle: () => void;
  handleDataChange: (val: any) => void;
};

export const EditModal: React.FC<Props> = ({
  open,
  data,
  closeHandle,
  handleDataChange,
}) => {
  const onEdit = () => {
    handleDataChange(val);
    closeHandle();
  };

  const [val, setVal] = useState<any>({
    id: -1,
    name: "",
    fiscal: "",
    type: "",
  });

  useEffect(() => {
    setVal(data);
  }, [data]);

  return (
    <Dialog open={open} onClose={closeHandle}>
      <DialogTitle>Edit Data</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="string"
          fullWidth
          variant="standard"
          size="small"
          value={val?.name ?? ""}
          onChange={(e) =>
            setVal((prev: any) => ({ ...prev, name: e.target.value }))
          }
        />
        <TextField
          autoFocus
          margin="dense"
          label="Fisical Year"
          type="number"
          fullWidth
          variant="standard"
          size="small"
          value={val?.fiscal ?? ""}
          onChange={(e) =>
            setVal((prev: any) => ({ ...prev, fiscal: e.target.value }))
          }
        />
        <TextField
          autoFocus
          margin="dense"
          label="Type"
          type="text"
          fullWidth
          variant="standard"
          size="small"
          value={val?.type ?? ""}
          onChange={(e) =>
            setVal((prev: any) => ({ ...prev, type: e.target.value }))
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onEdit} color="success" variant="contained">
          Save
        </Button>
        <Button onClick={closeHandle} color="warning" variant="contained">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
