import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BasicTable from "../BasicTable";
import { extractFieldsFromObjects, modifyValueByKey } from "../helpers/filterData";
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from "react";

const HomePage = () => {

    const [pageNumber, setPageNumber] = useState<number>(1);

    const fetchData = async () => {
        console.log("Fetching....");

        return await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&locale=en&x_cg_demo_api_key=CG-PVQzhchzRCWYT4Hs7QP7MkDB`);

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
    }, [pageNumber])

    // console.log(data?.data);

    let newObj;

    if (!isLoading && Array.isArray(data?.data)) {


        newObj = modifyValueByKey(data.data, 'symbol', (value) => value.toUpperCase());
        newObj = modifyValueByKey(newObj, 'current_price', (value) => '$' + value.toLocaleString());
        newObj = modifyValueByKey(newObj, "market_cap_change_percentage_24h", value => value.toFixed(2) + "%");
        newObj = modifyValueByKey(newObj, "total_volume", value => value.toLocaleString());


        newObj = extractFieldsFromObjects(newObj, {
            'market_cap_rank': 'Rank', "image": 'image', 'symbol': 'Coin', 'name': 'Name',
            'current_price': 'Price', 'market_cap_change_percentage_24h': '24h', 'total_volume': 'Total volume'
        });


    }




    return (
        <div className="flex flex-col">
            {isLoading && <p>Is loading .....</p>}

            {/* <button onClick={refetch}>Fetch</button> */}
            {/* {data?.data.map((item: any, index:number) => {
                return <Link to={`/coin/${item.id}`} key={index}>{item.id} </Link>
            })} */}
            {
                !isLoading && data?.data && <BasicTable data={newObj} />

            }
            <Pagination count={10} color="secondary"
                sx={{
                    '.MuiPaginationItem-root': {
                        color: 'white'
                    }

                }
                }
                showFirstButton
                showLastButton

                onChange={(e:any, page:number) => setPageNumber(page)}

            />
        </div>
    );
};

export default HomePage;