import styled from "styled-components";
const RestaurantLocation = styled.h4`
    color:#EDEFEE;
    font-size:20px;
    margin-top:-20px;
    padding-top:0;
`;
const RestaurantDescription = styled.p`
    color:#EDEFEE;
    font-size:0.8rem;
    padding-top:0;
`
const Chicago = () => {
    return(
        <>
        <RestaurantLocation>Chicago</RestaurantLocation>
        <RestaurantDescription>We are a family owned Mediterranean<br/> restaurant, focused on traditional recipes<br/>served with a modern twist.
        </RestaurantDescription>
        </>
    )
}

export default Chicago;