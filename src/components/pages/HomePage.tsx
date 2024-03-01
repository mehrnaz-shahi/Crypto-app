import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BasicTable from "../BasicTable";
import { extractFieldsFromObjects, modifyValueByKey } from "../helpers/filterData";

const HomePage = () => {

    const fetchData = async () => {

        console.log("Fetching....");


        return await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-PVQzhchzRCWYT4Hs7QP7MkDB");

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

    if (!isLoading &&  Array.isArray(data?.data)) {
        

            let newObj = extractFieldsFromObjects(data.data, {
                    'market_cap_rank': 'Rank', "image": '', 'symbol': 'Coin', 'name': 'Name',
                    'current_price': 'Price', 'price_change_24h': '24h', 'total_volume': 'Total volume'
                });

                
                
                
                
                newObj =  modifyValueByKey(newObj,  'Coin', (value) => value.toUpperCase());
                newObj = modifyValueByKey(newObj, 'Price', (value) => '$' + value.toLocaleString());
                newObj = modifyValueByKey(newObj, "24h", value => value.toFixed(2) + "%");
                
                
                console.log(newObj);
       

       

    }




    return (
        <div className="flex flex-col">
            {isLoading && <p>Is loading .....</p>}

            {/* <button onClick={refetch}>Fetch</button> */}
            {/* {data?.data.map((item: any, index:number) => {
                return <Link to={`/coin/${item.id}`} key={index}>{item.id} </Link>
            })} */}

            <BasicTable />
        </div>
    );
};

export default HomePage;