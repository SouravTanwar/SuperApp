const formatDateAndTime = () => {
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-US",{
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    const formattedTime = newDate.toLocaleTimeString("en-US",{
        hour: "numeric",
        minute: "numeric"
    });

    return{
        date: formattedDate,
        time: formattedTime
    }
}

export default formatDateAndTime