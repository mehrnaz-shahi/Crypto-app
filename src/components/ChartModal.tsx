import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useCoinChart } from '../hooks/queries';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
};

const ChartModal = ({ open, setOpen, info }: { open: boolean; setOpen: () => void, info: any }) => {

  const coin = info.Name;
  // console.log(coin.toLowerCase());

  const data = useCoinChart(coin?.toLowerCase(), 7);
  console.log(data);


  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-red-400">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {info.Name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ChartModal;