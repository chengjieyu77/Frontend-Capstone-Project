import deliveryIcon from '../pictures/motorbike.png';
import styled from "styled-components";

const StyledCard = styled.article`
    background-color:grey;
    width:25%;
    flex:1;
    border-radius: 16px;
    position: relative;
    box-shadow: none;
    background: #fff;
    transform-origin: center;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    padding:2rem;
`;

const Img = styled.img`
    max-width: 100%;
    flex:1;
`;

const Icon = styled.img`
min-width: 24px;
width: 24px;
height: 24px;
margin-left: 5px;
`;
const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
`;
const CardTitle = styled.h5`
    flex:1;
    font-size: 0.8rem;
`;
const Price = styled.span`
    flex:1;
    text-align:right;
    margin-right:0.5rem;
    font-size:0.8rem;
    color:#EE9972;
    font-weight:bold;
`;
const CardPara = styled.p`
    width:100%;
    height:6rem;
    margin-top:-0.8rem;
    font-size:0.8rem;
`;
const CardBody = styled.div`
    background-color:#EDEFEE;
    padding-left:5px;
    padding-right:3px;
    padding-bottom:10px;
`;
const Card = ({title,price,description,imageSrc}) => {
    const StyledFigure = styled.figure`
    background-image:url({imageSrc});
    margin: 0;
    padding: 0;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;
    return(
        <StyledCard className='card'>
            <StyledFigure>
                <Img src={imageSrc} alt=""/>
            </StyledFigure>
            <CardBody>
                <TitleContainer>
                    <CardTitle>{title}</CardTitle>
                    <Price>${price}</Price>
                </TitleContainer>
                <CardPara>{description}</CardPara>
                <a href="http://localhost:3000/order-online">Order a delivery
                <Icon src={deliveryIcon} alt=''/></a>
            </CardBody>
        </StyledCard>
    )
}

export default Card;