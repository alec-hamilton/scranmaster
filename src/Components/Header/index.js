const Header = (props) => {

    const setShowingRestaurants = props.setShowingRestaurants;
    const showingChangeButton = props.showingChangeButton;
    const setShowingChangeButton = props.setShowingChangeButton;

    function handleBackButton() {
        setShowingRestaurants('visible');
        setShowingChangeButton('invisible');
    }

    return (
        <nav className="
        navbar d-flex flex-row container-fluid px-sm-3 mt-2
        shadow-sm border-bottom justify-content-between"
        >
            <div>
                <h5>
                    <div className="text-info">Food
                        <span className="text-dark">Delivery</span></div>
                </h5>
            </div>

            <div className={"text-primary fw-bold " + showingChangeButton } onClick={handleBackButton}>
                {"<<"}Change Restaurant
            </div>
        </nav>
    );
}

export default Header;
