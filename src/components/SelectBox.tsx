import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface SelectBoxProps {
  label: string;
  state: string;
  setState: (state: string) =>  void;
  options: Array<string>;
}

const SelectBox = ({state, setState, label, options}: SelectBoxProps) => {

    const handleChange = (event: SelectChangeEvent) => {
        setState(event.target.value);
      };

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={state}
          onChange={handleChange}
          label="Age"
        >
          {options?.map((opt: string | number, index: number) => (
            <MenuItem key={index} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
};

export default SelectBox;