import BookingForm from "./BookingForm";
import { useState,useReducer } from "react";
import { fetchAPI,submitAPI } from "../BookinsApi";
import { useNavigate } from "react-router-dom";
const BookingPage = () => {
    // const[availableTimes,setAvailableTimes] = useState(
    //     ["17:00","18:00","19:00","20:00","21:00","22:00"]
    // );
    
    const updateTimes = (date) => {
        return fetchAPI(date);
    }
    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    const navigate = useNavigate();

    function submitForm(formData) {
        const isSubmitted = submitAPI(formData);

        if (isSubmitted) {
            navigate("/booking-confirmed");
        }
    }

    return(
        <>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
        </>
    )
}

export default BookingPage;