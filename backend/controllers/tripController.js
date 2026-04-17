import Trip from "../models/TripSchema.js";

async function saveTrip(preference)
{
    await Trip.create({
        startDate:preference.checkin,
        endDate:preference.checkout,
        destination:preference.state,
        adults:preference.people,  

    })
}



export default {saveTrip, planIterary};


