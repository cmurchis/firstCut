import { time } from "../utils/resource";
import { toast } from "react-toastify";

const Dashboard = () => {
    const [selectedTimezone, setSelectedTimezone] = useState({})
    //👇🏻 This updates the schedule array with the start and end time.
    const handleTimeChange = (e, id) => {
        const { name, value } = e.target;
        if (value === "Select") return;
        const list = [...schedule];
        list[id][name] = value;
        setSchedule(list);
    };
    //👇🏻 Logs the user's schedule to the console after setting the availability
    const handleSaveSchedules = () => {
        if (JSON.stringify(selectedTimezone) !== "{}") {
            console.log(schedule);
        } else {
            toast.error("Select your timezone");
        }
    };
    return (
        <div>
            <nav className='dashboard__nav'>
                <h2>BookMe</h2>
                <button onClick={handleLogout} className='logout__btn'>
                    Log out
                </button>
            </nav>
            <main className='dashboard__main'>
                <h2 className='dashboard__heading'>Select your availability</h2>
                <div className='timezone__wrapper'>
                    <p>Pick your timezone</p>
                    <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                    />

                    {schedule.map((sch, id) => (
                        <div className='form' key={id}>
                            <p>{sch.day}</p>
                            <div className='select__wrapper'>
                                <label htmlFor='startTime'>Start Time</label>
                                <select
                                    name='startTime'
                                    id='startTime'
                                    onChange={(e) => handleTimeChange(e, id)}
                                >
                                    {time.map((t) => (
                                        <option key={t.id} value={t.t} id={t.id}>
                                            {t.t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='select__wrapper'>
                                <label htmlFor='endTime'>End Time</label>
                                <select
                                    name='endTime'
                                    id='endTime'
                                    onChange={(e) => handleTimeChange(e, id)}
                                >
                                    {time.map((t) => (
                                        <option key={t.id} value={t.t} id={t.id}>
                                            {t.t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='saveBtn__container'>
                    <button onClick={handleSaveSchedules}>SAVE SCHEDULES</button>
                </div>
            </main>
        </div>
    );
};


const [schedule, setSchedule] = useState([
    { day: "Sun", startTime: "", endTime: "" },
    { day: "Mon", startTime: "", endTime: "" },
    { day: "Tue", startTime: "", endTime: "" },
    { day: "Wed", startTime: "", endTime: "" },
    { day: "Thu", startTime: "", endTime: "" },
    { day: "Fri", startTime: "", endTime: "" },
    { day: "Sat", startTime: "", endTime: "" },
]);

export const time = [
    { id: "null", t: "Select" },
    { id: "7", t: "7:00am" },
    { id: "8", t: "8:00am" },
    { id: "9", t: "9:00am" },
    { id: "10", t: "10:00am" },
    { id: "11", t: "11:00am" },
    { id: "12", t: "12:00pm" },
    { id: "13", t: "13:00pm" },
    { id: "14", t: "14:00pm" },
    { id: "15", t: "15:00pm" },
    { id: "16", t: "16:00pm" },
    { id: "17", t: "17:00pm" },
    { id: "18", t: "18:00pm" },
    { id: "19", t: "19:00pm" },
];



useEffect(() => {
    if (!localStorage.getItem("_id")) {
        navigate("/");
    }
}, [navigate]);

import { handleCreateSchedule } from "../utils/resource";

const handleSaveSchedules = () => {
//👇🏻 ensures the user's timezone has been selected
    if (JSON.stringify(selectedTimezone) !== "{}") {
        handleCreateSchedule(selectedTimezone, schedule, navigate);
    } else {
        toast.error("Select your timezone");
    }
};