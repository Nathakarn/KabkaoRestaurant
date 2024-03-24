import {useState} from "react";


const Booking = () =>{
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

        const handleSubmit = (e) =>{
            e.preventDefault();

            console.log({
                date,
                time,
                people,
                firstName,
                lastName,
                email,
                phone,
                comment,
            });
            setDate("");
            setTime("");
            setPeople("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setComment("");
        }
        return(
            <div className="flex justify-center items-center h-[100vh]">
                <div className="flex flex-col">
                    <div className="text-center text-[#ffffff] font-semibold mb-8">
                        <h1 className="text-[42px] font-bold font-head text-[#ffffff] leading-6 ">
                            Booking Now
                        </h1>
                    </div>
                    <div className="card w-95 bg-white shadow-lg p-6">
                    <h2 className="text-[42px] font-bold font-head text-[#4d4d4d] text-center">
                            Book a Table
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* date time */}
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-gray-500"
                                    >
                                Date
                                </label>
                                <input
                                type="date"
                                id="date"
                                className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                  htmlFor="time"
                                  className="block text-sm font-medium text-gray-500"
                                  >

                                </label>
                                <select
                                id="time"
                                className="mt-6 p-2 w-full border bg-slate-100 rounded-md"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                                >
                                <option value="12.00 PM">12.00 PM</option>
                                <option value="18.00 PM">18.00 PM</option>
                                </select>
                            </div>
                        </div>
                        {/* people */}
                        <div>
                            <label
                            htmlFor="people"
                            className="block text-sm font-medium text-gray-500"
                            >
                             People   
                            </label>
                            <select
                                id="people"
                                className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                required
                                >
                                <option value="2">2 Person</option>
                                <option value="5">5 preson</option>
                                </select>
                        </div>
                        {/* Name */}
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-500"
                                >
                                  FirstName      
                                </label>
                                <input
                                type="text"
                                id="firstName"
                                className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-500"
                                >
                                  LastName      
                                </label>
                                <input
                                type="text"
                                id="lastName"
                                className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                />
                            </div>
                        </div>    
                            
                        {/* email phone */}
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-500"
                                >
                                  Email      
                                </label>
                                <input
                                type="text"
                                id="email"
                                className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-500"
                                >
                                  Phone      
                                </label>
                                <input
                                type="tel"
                                id="phone"
                                className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                />
                            </div>
                        </div>
                        {/* comment */}
                            <div>
                                <label
                                htmlFor="comment"
                                className="block text-sm font-medium text-gray-500"
                                >
                                    Comment (Optional)

                                </label>
                                <textarea
                                id="comment"
                                className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                >
                                </textarea>
                            </div>

                            {/* button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-yellow-400 text-white p-2 rounded-md hover:bg-yellow-600 "
                                    >
                                Book A Table            
                                </button>

                            </div>
                        

                    </form>
                    </div>
                </div>

            </div>

            
            

       ); 
    }
    export default Booking;