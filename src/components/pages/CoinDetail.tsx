import { useParams } from "react-router-dom";
import { useCoinDetail } from "../../hooks/queries";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const CoinDetail = () => {

    const { id }  = useParams() as {id: string};

    const res = useCoinDetail(id);
    console.log(res);

    const postData = () => {
        const res =  axios.post("https://fakestoreapi.com/products", {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        });

        return res;
    }

    
    const {mutate, data, isLoading} = useMutation(postData);
    console.log(data, isLoading);
    



    return (
        <div>
            <button onClick={() => mutate()}>Send</button>
            {<p>{id}</p>}
        </div>
    );
};

export default CoinDetail;