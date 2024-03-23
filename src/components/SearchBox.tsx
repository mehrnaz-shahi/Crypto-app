import React, { useEffect, useState } from 'react';
import { Box, TextField, Divider } from '@mui/material';
import { useSearch } from '../hooks/queries';

const SearchBox = () => {

    const [search, setSearch] = useState("");

    // const res = useSearch(search);
    // console.log(res);



    const { data, isLoading } = useSearch(search);

    const searchHandler = (e) => {
        const value = e.target.value;


        setSearch(value);
        console.log(search);

    }
    return (

        <Box>


            <TextField id="search" label="Search coin" variant="standard" className="!mt-2 !ml-4"
                sx={{
                    "& .MuiInput-input": { color: 'white' },
                    "& .MuiInputLabel-root": { color: '#1976d2' },
                    '&:before': { borderColor: "blue" }
                }}

                onChange={searchHandler}
            />

            <Box>
                {isLoading && <p>Is loading</p>}
                {!isLoading && data?.data.coins.map((coin, index) => (
                    <Box key={index} className="!text-white cursor-pointer">
                        <p>{coin.name}</p>
                        <img src={coin.thumb}/>
                        <span>{coin.symbol}</span>
                        <Divider variant="middle"  sx={{color: "white"}}/>
                    </Box>
                ))}
            </Box>

        </Box>

    );
};

export default SearchBox;