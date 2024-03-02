import RatingCard from "./RatingCard";
import reviewer1 from "../pictures/reviewer1.jpg";
import reviewer2 from "../pictures/reviewer2.jpg";
import reviewer3 from "../pictures/reviewer3.jpg";

const reviews = [
    {
        name:"Amy Chen",
        rating:"⭐⭐⭐⭐⭐",
        getImageSrc:() => require("../pictures/reviewer1.jpg"),
        reviewText:"The Greek Salad is delicious. I love eating at this restaurant after a long day work.",
    },
    {
        name:"Lily Green",
        rating:"⭐⭐⭐⭐⭐",
        getImageSrc:() => require("../pictures/reviewer2.jpg"),
        reviewText:"The Greek Salad is delicious. I love eating at this restaurant after a long day work.",
    },
    {
        name:"Anna Yang",
        rating:"⭐⭐⭐",
        getImageSrc:() => require("../pictures/reviewer3.jpg"),
        reviewText:"The Greek Salad is delicious. I love eating at this restaurant after a long day work.",
    },
]
const CustomersSay = () => {
    return(
        <section className="testimonials">
            <h2 className="testimonial-title">Testimonials</h2>
            <artical className="testimonial-cards">
                <artical className="testimonial-card">
                    <p className="rating-score">⭐⭐⭐⭐⭐</p>
                    <div className="customers-name-pic">
                        <img src={reviewer1} alt="" className="reviewer-image"/>
                        <p className="testimonial-subtitle">Amy Chen</p>
                    </div>
                    
                    <p className="desc">The Greek Salad is delicious. I love eating at this restaurant after a long day work.</p>
                </artical>
                <artical className="testimonial-card">
                    <p className="rating-score">⭐⭐⭐⭐⭐</p>
                    <div className="customers-name-pic">
                        <img src={reviewer2} alt="" className="reviewer-image"/>
                        <p className="testimonial-subtitle">Lily Green</p>
                    </div>
                    <p className="desc">The Greek Salad is delicious. I love eating at this restaurant after a long day work.</p>
                </artical>
                <artical className="testimonial-card">
                    <p className="rating-score">⭐⭐⭐</p>
                    <div className="customers-name-pic">
                        <img src={reviewer3} alt="" className="reviewer-image"/>
                        <p className="testimonial-subtitle">Anna Yang</p>
                    </div>
                    <p className="desc">The Greek Salad is delicious. I love eating at this restaurant after a long day work.</p>
                </artical>
            </artical>
        </section>
    )
}

export default CustomersSay;