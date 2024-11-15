

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

// Tours array
const tours = [
    {
        tourID: "A001",
        tourName: "Dream",
        destination: "Penocony",
        duration: "7 Days",
        price: 55555,
        customersBooked: 3,
        customerIDs: [800001, 800002, 800004],
        reviews: [1]
    },
    {
        tourID: "A002",
        tourName: "Fontaine",
        destination: "Fontainebleau",
        duration: "12 Days",
        price: 12376,
        customersBooked: 3,
        customerIDs: [800004, 800002, 900001],
        reviews: [2]
    },
    {
        tourID: "A003",
        tourName: "Dendelion",
        destination: "Mondstadt",
        duration: "9 Days",
        price: 280920,
        customersBooked: 2,
        customerIDs: [800002, 800003],
        reviews: [2]
    },
    {
        tourID: "A004",
        tourName: "OnePiece",
        destination: "SunnyGo",
        duration: "30 Days",
        price: 250000,
        customersBooked: 5,
        customerIDs: [900001, 800004, 800001, 800003, 800002],
        reviews: [4]
    }
];

// Agents array
const agents = [
    {
        agentID: 1001,
        name: "Kakavasha",
        toursManaged: []
    },
    {
        agentID: 1002,
        name: "Blade",
        toursManaged: []
    }
];

// Module Exports
module.exports = {
    // Function 1, add new customer
    addCustomer(newC) {
        const existingC = cust.find(c => c.customerID === newC.customerID);
        if (!existingC) {
            cust.push(newC);
            console.log(`Customer ${newC.name} has been successfully added.`);
        } else {
            console.log(`Customer with ID ${newC.customerID} already exists.`);
        }
    },

    // Function 2, add new tour
    addTour(newT) {
        const existingT = tours.find(t => t.tourID === newT.tourID);
        if (!existingT) {
            tours.push(newT);
            console.log(`Tour ${newT.tourName} has been successfully added.`);
        } else {
            console.log(`Tour with ID ${newT.tourID} already exists.`);
        }
    },

    // Function 3, book a tour for a customer
    bookTour(cID, tID) {
        const c = cust.find(c => c.customerID === cID);
        const t = tours.find(t => t.tourID === tID);

        if (c && t) {
            if (!t.customerIDs.includes(cID)) {
                t.customerIDs.push(cID);  // Add the customer ID to the customerIDs list
                t.customersBooked += 1;  // Increment the customersBooked count
                c.bookedTours.push(tID);  // Add the tourID to the customer's booked tours
                console.log(`${c.name} has successfully booked the ${t.tourName} tour.`);
            } else {
                console.log(`${c.name} has already booked the ${t.tourName} tour.`);
            }
        } else {
            console.log("Invalid customer ID or tour ID.");
        }
    },

    // Function 4, review a tour
    reviewTour(cID, tID, review) {
        const c = cust.find(c => c.customerID === cID);
        const t = tours.find(t => t.tourID === tID);

        if (c && t) {
            if (t.customerIDs.includes(cID)) {
                t.reviews.push({ customerID: c.customerID, review: review });
                console.log(`${c.name} has reviewed the ${t.tourName} tour: ${review}`);
            } else {
                console.log(`${c.name} cannot review the ${t.tourName} tour because they have not booked it.`);
            }
        } else {
            console.log("Invalid customer ID or tour ID.");
        }
    },

    // Function 5, assign an agent to a tour
    assignAgentToTour(agentID, tID) {
        const agent = agents.find(a => a.agentID === agentID);
        const t = tours.find(t => t.tourID === tID);

        if (agent && t) {
            if (!agent.toursManaged.includes(t.tourName)) {
                agent.toursManaged.push(t.tourName);
                console.log(`${agent.name} has been assigned to manage the ${t.tourName} tour.`);
            } else {
                console.log(`${agent.name} is already managing the ${t.tourName} tour.`);
            }
        } else {
            console.log("Invalid agent ID or tour ID.");
        }
    }
};
