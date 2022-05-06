import {useEffect} from "react";

const PostOrder = ({placeOrder, setOrderResponse, orderData}) => {

    const customSettings = {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
            'Content-type': 'application/json'
        }
    }

    const extractResponseData = (response) => {
        return response.json()
    }

    const processResponseData = (data) => {
        setOrderResponse(data);
        console.log(data);
    }

    return (
        useEffect(() => {
                if (placeOrder) {
                    fetch('http://localhost:8080/orders', customSettings)
                        .then(extractResponseData)
                        .then(processResponseData)
                }
            },
            [placeOrder]
        )
    );
}

export default PostOrder;