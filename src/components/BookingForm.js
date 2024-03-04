import { useState } from "react";



const BookingForm = (props) => {
    const [date,setDate] = useState("");
    const[time,setTime] = useState("");
    const[guestsNum,setGusetsNum] = useState(1);
    const[occasion,setOccasion] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })


    const clearForm = () => {
        setDate("");
        setTime("");
        setGusetsNum(1);
        setOccasion("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(formData)
        clearForm();
        // sendDataToBookingPage();
    }

    const sendDataToBookingPage=()=>{
        props.getDateFromBookingForm(date);
    }
    return(
        <div className="book-now">
        <h1 className="form-title">Book Now</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
            <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => {setDate(e.target.value)}} required/>
            
            
                <label htmlFor="res-time"  >Choose time</label>
                <select id="res-time " value={time} onChange={(e) => {setTime(e.target.value)}} required>

                    {props.availableTimes.map((availableTime) => {
                        return <option>{availableTime}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestsNum} onChange={(e) => {setGusetsNum(e.target.value)}} required/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>other</option>
                </select>
            </fieldset>
                
            <div className="form-button-container">
            <input type="submit" value="Make Your reservation" className="button" aria-label="On Click"/>
            </div>
            
        </form>
        </div>
    )
}

export default BookingForm;