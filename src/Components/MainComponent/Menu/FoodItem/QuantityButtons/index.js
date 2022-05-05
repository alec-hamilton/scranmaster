const QuantityButtons = ({foodItem, addToOrderItems, orderItems, subtractFromOrderItems}) => {

    const plusClickHandle = () => {

        let orderObject = {
            name: foodItem.foodName,
            price: foodItem.price,
            qty: 1,
        }
        addToOrderItems(orderObject);
    }

    const minusClickHandle = () => {

        let orderObject = {
            name: foodItem.foodName,
            price: foodItem.price,
            qty: 1,
        }
        subtractFromOrderItems(orderObject);
    }

    const filterItems = (item) => {
        return item.name === foodItem.foodName;
    }

    let qty = 0;
    const index = orderItems.findIndex(filterItems);

    if (index !== -1) {
        qty = orderItems[index].qty;
    }

    return (
        <div className="input-group d-flex align-items-center justify-content-end flex-nowrap">
            <div className="input-group-btn">
                <button onClick={minusClickHandle} className="btn btn-primary btn-number">-</button>
            </div>
            <p className="py-1 px-2 m-0">{qty}</p>
            <div className="input-group-btn">
                <button onClick={plusClickHandle} className="btn btn-primary btn-number">+</button>
            </div>
        </div>
    );
}

export default QuantityButtons;