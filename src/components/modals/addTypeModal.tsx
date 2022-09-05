import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";

type Props = {
  open: boolean;
  closeHandle: () => void;
};

export const AddTypeModal: React.FC<Props> = ({ open, closeHandle }) => {
  const onSave = () => {};

  return (
    <Dialog open={open} onClose={closeHandle}>
      <DialogTitle>Add Type Data</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Type"
          type="string"
          fullWidth
          variant="standard"
          size="small"
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
