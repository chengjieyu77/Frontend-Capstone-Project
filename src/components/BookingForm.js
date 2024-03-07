import { useState } from "react";



const BookingForm = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName,setLastName] = useState("");
    // const [contactNumber,setContactNumber] = useState(123-333-333);
    // const [date,setDate] = useState("");
    // const[time,setTime] = useState("");
    // const[guestsNum,setGusetsNum] = useState(1);
    // const[occasion,setOccasion] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })

    const handleFormChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }))
      }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(formData);
    }

    return(
        <div className="book-now">
        <h1 className="form-title">Book Now</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="first-name">First name: </label>
                <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleFormChange} required/>
                <label htmlFor="last-name">Last name: </label>
                <input type="text" id="lastfirst-name" name="lastName" value={formData.lastName} onChange={handleFormChange} required/>
                <label htmlFor="contact-number">Contact Number: </label>
                <input type="number" id="contact-number" name="contactNumber" value={formData.contactNumber} onChange={handleFormChange} required placeholder="123-456-789"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="date" value={formData.date} onChange={handleFormChange} required/>
                <label htmlFor="res-time"  >Choose time</label>
                <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>

                    {props.availableTimes.map((availableTime) => {
                        return <option>{availableTime}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="nOfGuests" value={formData.noOfGuests} onChange={handleFormChange} required/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={handleFormChange}>
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