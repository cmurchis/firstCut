export async function handleRegister(email, username, password, navigate) {
    //...data
}

export async function handleLogin(username, password, navigate) {
    //...data
}



export async function handleCreateSchedule(
    selectedTimezone,
    schedule,
    navigate
) {
    //..other data
}

export function fetchBookingDetails(
    user,
    setError,
    setTimezone,
    setSchedules,
    setReceiverEmail
) {
    fetch(`http://localhost:4000/schedules/${user}`, {
        method: "POST",
        body: JSON.stringify({
            username: user,
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error_message) {
                toast.error(data.error_message);
                setError(true);
            } else {
                setTimezone(data.timezone.label);
                setSchedules(data.schedules);
                setReceiverEmail(data.receiverEmail);
            }
        })
        .catch((err) => console.error(err));
}


import emailjs from "@emailjs/browser";

export const sendEmail = (
    receiverEmail,
    email,
    fullName,
    message,
    duration
) => {
    emailjs
        .send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            {
                to_email: receiverEmail,
                from_email: email,
                fullName,
                message,
                duration,
            },
            "YOUR_PUBLIC_KEY"
        )
        .then(
            (result) => {
                console.log(result.text);
                toast.success("Session booked successfully!");
            },
            (error) => {
                console.log(error.text);
                toast.error(error.text);
            }
        );
};

