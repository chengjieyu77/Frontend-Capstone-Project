import restanrantfood from '../pictures/restauranfood-changed.jpg';
function clickMe() {
    alert("You clicked me!");
  }
const CallToAction = () => {
    return(
        <section className='callToAction'>
            <div className='callToAction-left'>
                <h2 className='title'>Little Lemon</h2>
                <h3 className='sub-title'>Chicago</h3>
                <p className='restaurant-description'>We are a family owned Mediterranean restaurant, focused on traditional recipesserved with a modern twist.Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art.</p>
                <div className='button-container'>
                <button onClick={clickMe} >
                    Reserve a Table
                </button>
                </div>
            </div>
            <div className='callToAction-right'>
                <img src={restanrantfood} alt='restaurant food' className='callToAction-image'/>
            </div>
        </section>
    )
}

export default CallToAction;