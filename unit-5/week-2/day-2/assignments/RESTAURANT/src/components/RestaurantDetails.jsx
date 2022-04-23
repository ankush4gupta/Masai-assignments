import "./Restraurant.css"
export const RestaurantDetails = ({ e }) => {

    return <div className="container" >


        <div key={e.id} className="main">
            <div className="sub_main">
                <div><img src={e.image} alt="" /></div>
                <div className="details">
                    <h3>{e.name}</h3>
                    <p className="color">Dish :{e.dishes.join(", ")}</p>
                    <p className="color">Cost :{e.twoCost} for two</p>
                    <p>Min Cost : {e.min}</p>
                    <p>Acceptd : {e.payment_methods.cash ? "||Cash payment|| " : null}
                        {e.payment_methods.card ? "||Card payment||" : null}</p>
                </div>
                <div>
                    <h3 className="rating">{e.rating}</h3>
                    <p className="color">{e.votes} votes</p>
                    <p className="color">{e.review} reviews</p>
                </div>
            </div>
            <div className="bottom">
                <button>Online Order</button>
            </div>

        </div>
    </div>


}