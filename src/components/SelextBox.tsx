import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectBoxProps {
  state: string;
  setState: (state: string) => void;
  label: string;
  options: Array<string>;
}

const SelextBox = ({ state, setState, label, options }: SelectBoxProps) => {

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={state}
        onChange={(event: SelectChangeEvent) => setState(event.target.value)}
        label="Age"

      >

        {Array.isArray(options) &&

          options.map((opt, index) => <MenuItem key={index} value={opt}>{opt}</MenuItem>)
        }
      </Select>
    </FormControl>);
};

export default SelextBox;