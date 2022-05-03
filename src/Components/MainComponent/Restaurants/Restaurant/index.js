const Restaurant = (props) => {

    const {item} = props;

    return (
        <div className="text-center card border-1 border-info rounded-1 my-2 mx-3 mx-lg-1">
            <div>
                <h2 className="card-title p-4 px-lg-3">{item.name}</h2>
            </div>
        </div>
    );
}

export default Restaurant;