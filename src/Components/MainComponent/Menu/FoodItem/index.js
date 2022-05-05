import QuantityButtons from "./QuantityButtons";

const FoodItem = ({foodItem, addToOrderItems, orderItems, subtractFromOrderItems}) => {

    let side = '';

    if (foodItem.sideItem === true) {
        side = 'Side';
    }

    return (
        <div className="text-start card shadow border-1 border-dark rounded-1 my-2">
            <div className="d-flex flex-column justify-content-between h-100">
                <div className="card-body">
                    <p className="fs-6 card-title fw-bold">{foodItem.foodName}</p>
                    <p className="badge bg-success me-1 mb-1">Calories: {foodItem.calories}</p>
                    <p className="badge bg-primary me-1 mb-1">{foodItem.foodType}</p>
                    <p className="badge bg-warning me-1 mb-1 text-dark">{side}</p>
                </div>
                <div className="card-footer d-flex flex-nowrap align-items-center border-0 bg-transparent">
                    <p className="  fs-6 py-1 my-0 fw-bold">£{foodItem.price.toFixed(2)}</p>
                    <QuantityButtons foodItem={foodItem}
                                     addToOrderItems={addToOrderItems}
                                     orderItems={orderItems}
                                     subtractFromOrderItems={subtractFromOrderItems}
                    />
                </div>
            </div>
        </div>



        // <div className="text-start card shadow border-1 border-dark rounded-1 my-3 h-100">
        //     <div className="p-lg-2">
        //         <p className="fs-6 card-title fw-bold">{foodItems.foodName}</p>
        //         <p className="badge bg-success me-1">Calories: {foodItems.calories}</p>
        //         <p className="badge bg-primary me-1 ">{foodItems.foodType}</p>
        //         <p className="badge bg-warning me-1">{side}</p>
        //         <p className="fs-6 py-1 my-0 fw-bold">£{foodItems.price.toFixed(2)}</p>
        //     </div>
        // </div>
    );
}

export default FoodItem;