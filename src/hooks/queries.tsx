import axios from "axios";
import { getUrl, BaseUrl, searchUrl } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const useCoinsList = () => {
    const fetchData = async () => {
        console.log("Fetching....");

        return await axios.get(getUrl());

    }

    const res = useQuery(["coins"], fetchData,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,

        }
    );


    return res


}


const useCoinDetail = (id: string) => {
    const fetchData = async ({ queryKey }: {queryKey: Array<string | number>}) => {

        const id = queryKey[1];

        return await axios.get(BaseUrl + '/coins/' + id + "?x_cg_demo_api_key=CG-PVQzhchzRCWYT4Hs7QP7MkDB");

    }

    const res = useQuery(["coins", id], fetchData,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,

        }

    );
    return res;
}

const useCoinChart = (id: string, days: number) => {
    const fetchData = async () => {
        
        return await axios.get(BaseUrl + `/coins/${id}/market_chart?vs_currency=usd&days=${days}&x_cg_demo_api_key=CG-PVQzhchzRCWYT4Hs7QP7MkDB`);
    }

    const res = useQuery(["coin-chart", id], fetchData,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,

        }
    )

    return res;

}

const useSearch = (query: string) => {
    const fetchData = async () => {
        
        return await axios.get(searchUrl(query));
    }

    const res = useQuery(["search", query], fetchData,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,

        }
    )

    return res;


}

export { useCoinsList, useCoinDetail, useCoinChart, useSearch };