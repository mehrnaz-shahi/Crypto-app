import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BasicTable from "../BasicTable";
import { extractFieldsFromObjects, modifyValueByKey } from "../helpers/filterData";
import { Pagination, Box, TextField } from '@mui/material';
import { useState, useEffect } from "react";
import SelectBox from "../SelectBox";

const HomePage = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);

    const [vc, setVc] = useState<string>("usd");



    const fetchData = async () => {
        console.log("Fetching....");

        return await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vc}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&locale=en&x_cg_demo_api_key=CG-PVQzhchzRCWYT4Hs7QP7MkDB`);

    }

    const res = useQuery(["coins"], fetchData,
        {
            // cacheTime: 5 * 1000,
            // staleTime: 5 * 1000,
            // enabled: false,
            // refetchOnMount: false,
            // refetchOnWindowFocus: false,
            // refetchInterval: 5 * 1000,
            // onSuccess: (data) => {
            //     console.log('200');

            // },
            // onError: (error) => {
            //     console.log(error.message);

            // }


        }
    );

    const { isLoading, data, isError, error, refetch } = res as {
        isLoading: boolean;
        data: any;
        isError: boolean;
        error: string | null;
        refetch: () => {}

    };

    useEffect(() => {
        refetch();
    }, [pageNumber, vc])

    let newObj;

    if (!isLoading && Array.isArray(data?.data)) {

        const sign = vc === 'usd' ? '$' : vc === 'eur' ? '€' : '¥';
        newObj = modifyValueByKey(data.data, 'symbol', (value) => value.toUpperCase());
        newObj = modifyValueByKey(newObj, 'current_price', (value) => { return `${sign}${value.toLocaleString()}` });
        newObj = modifyValueByKey(newObj, "market_cap_change_percentage_24h", value => value.toFixed(2) + "%");
        newObj = modifyValueByKey(newObj, "total_volume", value => value.toLocaleString());


        newObj = extractFieldsFromObjects(newObj, {
            'market_cap_rank': 'Rank', "image": 'image', 'symbol': 'Coin', 'id': 'Name',
            'current_price': 'Price', 'market_cap_change_percentage_24h': '24h', 'total_volume': 'Total volume'
        });


    }

    return (
        <div className="flex flex-col">
            {isLoading && <p>Is loading .....</p>}

            <Box className="flex ">
                <SelectBox state={vc} setState={setVc} label="Vc currency" options={["usd", "eur", "jpy"]} />

                <TextField id="search" label="Search coin" variant="standard" className="!mt-2 !ml-4"
                    sx={{
                        "& .MuiInput-input": { color: 'white' },
                        "& .MuiInputLabel-root": {color: '#1976d2'},
                        '&:before' : {borderColor: "blue"}
                    }} />
            </Box>

            {
                !isLoading && data?.data && <BasicTable data={newObj} />

            }
            <Pagination count={10} color="secondary"
                className="flex justify-center mt-4"
                sx={{
                    '.MuiPaginationItem-root': {
                        color: 'white'
                    }

                }
                }
                showFirstButton
                showLastButton

                onChange={(e: any, page: number) => setPageNumber(page)}

            />
        </div>
    );
};

export default HomePage;