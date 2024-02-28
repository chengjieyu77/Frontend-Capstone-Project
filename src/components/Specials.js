import Button from './Button.js';
import Card from './Card.js';

function handleClick() {
    alert("You clicked me!");
  }

const dishes = [
    {
        title: "Greek Salad",
        price:"12.99",
        description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImageSrc: () => require("../pictures/greek salad.jpg"),
      },
      {
        title: "Bruchetta",
        price:"5.99",
        description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  ",
        getImageSrc: () => require("../pictures/bruttcha.jpg"),
      },
      {
        title: "Lemon Dessert",
        price:"5.00",
        description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../pictures/lemon dessert.jpeg"),
      },
]
const Specials = () => {
    return(
        <section className='specials'>
            <div className='specials-up'>
                <h2 className='specials-title'>Specials</h2>
                <div className='specials-button-container'>
                <Button onClick={handleClick}>
                    Online Menu
                </Button>
                </div>
            </div>
            <div className='specials-bottom'>
            <artical className="specials-cards">
                {dishes.map((dish) => (
                <Card
                key={dish.title}
                title={dish.title}
                price={dish.price}
                description={dish.description}
                imageSrc={dish.getImageSrc()}
                />
                ))}
            </artical>
            </div>
            
        </section>
    )
}

export default Specials;