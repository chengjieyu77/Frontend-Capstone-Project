
const RatingCard = ({rating,name,imageSrc,reviewText}) => {
    return(
        <artical>
            <p className="rating-score">{rating}</p>
            <img src={imageSrc} alt="" className="reviewer-image"/>
            <p className="sub-title">{name}</p>
            <p className="desc">{reviewText}</p>
        </artical>
    )
}

export default RatingCard;