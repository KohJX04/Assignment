
const cust = [
    {
        customerID: 800001,
        name: "Aventurine",
        bookedTours: ["A001", "A002", "A003", "A004"]
    },
    {
        customerID: 800002,
        name: "YingXing",
        bookedTours: ["A001", "A002", "A004"]
    },
    {
        customerID: 800003,
        name: "Kasachi",
        bookedTours: ["A002", "A004"]
    },
    {
        customerID: 800004,
        name: "Furina",
        bookedTours: ["A001", "A003", "A004"]
    },
    {
        customerID: 900001,
        name: "Kaito",
        bookedTours: ["A002", "A004"]
    }
];

const tours = [
    {
        tourID: "A001",
        tourName: "Dream",
        destination: "Penocony",
        duration: "7 Days",
        price: 55555,
        customersBooked: 3,
        customerIDs: [800001, 800002, 800004],
        reviews: [2],
        startDate: "05-05-2024" 
    },
    {
        tourID: "A002",
        tourName: "Fontaine",
        destination: "Fontainebleau",
        duration: "12 Days",
        price: 12376,
        customersBooked: 4,
        customerIDs: [800001, 800002, 800003, 900001],
        reviews: [1],
        startDate: "18-07-2023"
    },
    {
        tourID: "A003",
        tourName: "Dendelion",
        destination: "Mondstadt",
        duration: "9 Days",
        price: 280920,
        customersBooked: 2,
        customerIDs: [800001, 800004],
        reviews: [2],
        startDate: "25-12-2020" 
    },
    {
        tourID: "A004",
        tourName: "OnePiece",
        destination: "SunnyGo",
        duration: "30 Days",
        price: 250000,
        customersBooked: 5,
        customerIDs: [800001, 800002, 800003, 800004, 900001],
        reviews: [0],
        startDate: "12-12-2024" 
    }
];

const agents = [
    {
        agentID: 1001,
        name: "Kakavasha",
        toursManaged: ["A001", "A004"]
    },
    {
        agentID: 1002,
        name: "Blade",
        toursManaged: ["A002", "A003"]
    }
];

module.exports = {

    //Function 1
    //Add a new customer to the system.
    //Checks if the customer already exists using their ID.
     
    addCustomer(newC) {
        const existingC = cust.find(c => c.customerID === newC.customerID);
        if (!existingC) {
            cust.push(newC);
            console.log('Customer ${newC.name} has been successfully added.');
        } else {
            console.log('Customer with ID ${newC.customerID} already exists.');
        }
    },

    //Function 2
    //Assign an agent to a specific tour.
    //Ensures the agent is not already assigned to the tour.
    
    assignAgentToTour(agentID, tID) {
        const agent = agents.find(a => a.agentID === agentID);
        const t = tours.find(t => t.tourID === tID);

        if (agent && t) {
            if (!agent.toursManaged.includes(tID)) {
                agent.toursManaged.push(tID);
                console.log('${agent.name} has been assigned to manage the ${t.tourName} tour.');
            } else {
                console.log('${agent.name} is already managing the ${t.tourName} tour.');
            }
        } else {
            console.log("Invalid agent ID or tour ID.");
        }
    },

    //Function 3
    //Display all tours with the letter 'D' in their names.
     
    displayToursWithD() {
        const dTours = tours.filter(t => t.tourName.includes('D'));
        if (dTours.length > 0) {
            console.log("Tours containing letter 'D':");
            dTours.forEach(t => {
                console.log(`${t.tourName} - ${t.destination}`);
            });
        } else {
            console.log("No tours contain the letter 'D'.");
        }
    },

    //Function 4
    //Book a tour for a customer.
    //Validates if the customer and tour exist, and prevents duplicate bookings.
     
    bookTour(cID, tID) {
        const c = cust.find(c => c.customerID === cID);
        const t = tours.find(t => t.tourID === tID);

        if (c && t) {
            if (!t.customerIDs.includes(cID)) {
                t.customerIDs.push(cID);
                t.customersBooked += 1;
                c.bookedTours.push(tID);
                console.log(`${c.name} has successfully booked the ${t.tourName} tour.`);
            } else {
                console.log(`${c.name} has already booked the ${t.tourName} tour.`);
            }
        } else {
            console.log("Invalid customer ID or tour ID.");
        }
    },

    //Function 5
    //Allow a customer to review a tour.
    //Checks if the tour has started and if the customer has booked it.

    reviewTour(cID, tID, review) {
        const c = cust.find(c => c.customerID === cID);
        const t = tours.find(t => t.tourID === tID);

        if (c&&t) {
            if (t.customerIDs.includes(cID)) {
                const today = new Date();
                const [day, month, year] = t.startDate.split('-').map(Number);
                const startDate = new Date(year, month - 1, day);

                if (today >= startDate) {
                    t.reviews.push({ customerID: c.customerID, review: review });
                    console.log(`${c.name} has review the ${t.tourName} tour: ${review}`);
                } else {
                    console.log('${c.name} cannot leave review for ${t.tourName} tour because it has not start yet.');
                }
            } else {
                console.log('${c.name} cannot review the ${t.tourName} tour because tour is not book.');
            }
        } else {
            console.log("Invalid customer ID or tour ID.");
        }
    },

    //Function 6
    //Cancel a tour if it is more than 3 days before the start date.
    //Prevents cancellation if the time frame is too close.

    cancelTour(tID) {
        const t = tours.find(t => t.tourID === tID);

        if(t){
            const today = new Date();
            const [day, month, year] = t.startDate.split('-').map(Number);
            const startDate = new Date(year, month - 1, day);
            const threeDaysBefore = new Date(startDate);
            threeDaysBefore.setDate(threeDaysBefore.getDate() -3);

            if (today <= threeDaysBefore) {
                t.customersBooked = 0;
                t.customerIDs = [];
                console.log('The ${t.tourName} tour booking has been cancelled.');
            } else {
                console.log('The ${t.tourName} tour booking cannot be cancelled as it is 3 days to the starting date.');
            }
        } else {
            console.log("Invalid tour ID.");
        }
    }
};
