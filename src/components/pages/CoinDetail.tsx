import { useParams } from "react-router-dom";
import { useCoinDetail } from "../../hooks/queries";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const CoinDetail = () => {

    const { id } = useParams();

    const res = useCoinDetail(id);
    console.log(res);

    const postData = () => {
        return axios.post("https://fakestoreapi.com/products", {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        })
    }
    // const res = useMutation(postData);



    return (
        <div>
            {<p>{id}</p>}
        </div>
    );
};

export default CoinDetail;