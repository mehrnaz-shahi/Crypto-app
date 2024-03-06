import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import up from "../assets/chart-up.svg";
import down from "../assets/chart-down.svg";
import ChartModal from './ChartModal';

interface DataProps {
  data: any[];
}

export default function BasicTable({ data }: DataProps) {

  const [open, setOpen] = useState<boolean>(false);

  if (!data || data.length === 0) {
    return null;
  }
  const columns = Object.keys(data[0]);
  console.log(columns);

  const handleOpen = (row: any) => {
    setOpen(!open);
  }



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            {columns.map((column: any, index: number) => (
              <TableCell key={index} >
                {column === "image" ? "" : column}
              </TableCell>
            ))}

            <TableCell>{" "}</TableCell>

            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map(
                (col, colIndex) => (
                  <>

                    <TableCell component="th" scope="row" className={col === '24h' ? row[col].includes('-') ? "!text-red-500" : "!text-green-500" : ""}>
                      {
                        col === 'image' ?
                          <img src={row[col]} className='w-8' />
                          :
                          row[col]}
                    </TableCell>
                  </>
                )
              )}

              <TableCell>
                <img src={row['24h'].includes('-') ? down : up} className='w-14 cursor-pointer' onClick={() => handleOpen(row)} />
              </TableCell>

            </TableRow>
          ))}

          <ChartModal open={open} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}