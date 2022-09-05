import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";

type Props = {
  open: boolean;
  closeHandle: () => void;
};

export const EditModal: React.FC<Props> = ({ open, closeHandle }) => {
  const onEdit = () => {};

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
        />
        <TextField
          autoFocus
          margin="dense"
          label="Fisical Year"
          type="number"
          fullWidth
          variant="standard"
          size="small"
        />
        <TextField
          autoFocus
          margin="dense"
          label="Type"
          type="text"
          fullWidth
          variant="standard"
          size="small"
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
