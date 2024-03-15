import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useCoinChart } from '../hooks/queries';
import Chart from './Chart';
import { useState } from 'react';
import { convertChartData } from './helpers/CovertChartdata';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
};

const ChartModal = ({ open, setOpen, info }: { open: boolean; setOpen: (bool: boolean) => void, info: any }) => {


  const [type, setType] = useState("prices");

  const coin = info.Name;
  const { data } = useCoinChart(coin?.toLowerCase(), 7);

  let converted;
  if (data?.data) {
    converted = convertChartData(data.data, type);
  }

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

          <Button onClick={() => setType("prices")}>Prices</Button>
          <Button onClick={() => setType("market_caps")}>Market caps</Button>
          <Button onClick={() => setType("total_volumes")}>Total volume</Button>


          {data &&
            <Chart data={converted} type='prices' />
          }
        </Box>
      </Modal>
    </div>
  );
};

export default ChartModal;