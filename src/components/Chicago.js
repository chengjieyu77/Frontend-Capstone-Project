import restaurant from "../pictures/restaurant.jpg";
import restaurant_staff from "../pictures/Mario and Adrian A.jpg";
const Chicago = () => {
    return(
       <section className="chicago-description">
        <div className="chicago-left">
        <h2 className="chicago-title">Little Lemon</h2>
            <h4 className="chicago-sub-title">Chicago</h4>
            <p>Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art. Crafted by expert chefs with locally-sourced ingredients, our dishes not only delight the palate but nourish the soul. Whether you're seeking a romantic dinner, a family meal, or a relaxed atmosphere with friends, Little Lemon is your ideal culinary destination. Find us in the heart of Chicago for an unforgettable experience.</p>
        </div>
           <div className="chicago-right">
            <div className="chicago-image-container">
            <div className="chicago-image-container-top">
                    <img src={restaurant_staff} alt="restaurant" className="chicago-picture-1"/>
                </div>
                <div className="chicago-image-container-bottom">
                    <img src={restaurant} alt="restaurant" className="chicago-picture-2"/>
                </div>
            </div>
                
           </div>
       </section>
    )
}

export default Chicago;