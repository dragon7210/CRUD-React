import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

type Props = {
  open: boolean;
  closeHandle: () => void;
  handleDataDel: (val: any) => void;
  data: any;
};

export const DelModal: React.FC<Props> = ({
  open,
  data,
  closeHandle,
  handleDataDel,
}) => {
  const onDelete = () => {
    handleDataDel(data);
    closeHandle();
  };

  return (
    <Dialog open={open} onClose={closeHandle}>
      <DialogTitle>Do you want to Delete?</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={onDelete} color="success" variant="contained">
          Delete
        </Button>
        <Button onClick={closeHandle} color="warning" variant="contained">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
