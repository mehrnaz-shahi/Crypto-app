import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HomePage = () => {

    const fetchData = async () => {

        return await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-PVQzhchzRCWYT4Hs7QP7MkDB");

    }

    const res = useQuery(["coins" ], fetchData, {
        
    });

    console.log(res);
    
    return (
        <div>
            
        </div>
    );
};

export default HomePage;