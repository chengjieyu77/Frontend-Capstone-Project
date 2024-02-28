import Chicago from './Chicago.js';
import restanrantfood from '../pictures/restauranfood.jpg';
import Button from './Button.js';
function clickMe() {
    alert("You clicked me!");
  }
const CallToAction = () => {
    return(
        <section className='callToAction'>
            <div className='callToAction-left'>
                <div className='callToAction-left-left'>
                    <h2 className='sub-title'>Little Lemon</h2>
                    <Chicago />
                    <Button onClick={clickMe} >
                        Reserve a Table
                    </Button>
                </div>
                <div className='callToAction-left-right'>

                </div>
            </div>
            <div className='callToAction-right'>
                <img src={restanrantfood} alt='restaurant food' className='callToAction-image'/>
            </div>
        </section>
    )
}

export default CallToAction;