const OrderList = ({orderItems}) => {
    return (
        <div className="card w-100 mt-3 border-0 bg-light text-start">
            <div className="card-body">
                <div className="card-title border-0 bg-light text-start fw-bold text-primary">Order</div>
                <div className="list-group list-unstyled">
                    {orderItems.map((orderItem) => (
                        <li className="" key={orderItem.name}>{orderItem.name}
                            <span className="badge bg-primary rounded-pill">{orderItem.quantity}</span>
                        </li>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default OrderList