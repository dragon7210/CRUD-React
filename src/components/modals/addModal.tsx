import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  open: boolean;
  closeHandle: () => void;
  handleDataAdd: (name: string, fiscal: number, type: string) => void;
};

export const AddModal: React.FC<Props> = ({
  open,
  closeHandle,
  handleDataAdd,
}) => {
  const [name, setName] = useState<string>("");
  const [fiscal, setFiscal] = useState<number>(0);
  const [type, setType] = useState<string>("");

  const onSave = () => {
    handleDataAdd(name, fiscal, type);
    closeHandle();
  };

  return (
    <Dialog open={open} onClose={closeHandle}>
      <DialogTitle>Add Data</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="string"
          fullWidth
          variant="standard"
          size="small"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Fisical Year"
          type="number"
          fullWidth
          variant="standard"
          size="small"
          onChange={(e) => setFiscal(parseInt(e.target.value))}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Type"
          type="text"
          fullWidth
          variant="standard"
          size="small"
          onChange={(e) => setType(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onSave} color="success" variant="contained">
          Save
        </Button>
        <Button onClick={closeHandle} color="warning" variant="contained">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
