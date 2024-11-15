

**Tour Management Node Module**

## Overview

This Node.js module is designed to manage a tour booking system. It allows users to add new customers, book tours, review tours, assign agents to tours, and cancel tours. The module also tracks the details of customers, tours, and agents.

**Run the Module**: You can now use the module by importing it in your main application file or calling the functions directly from the terminal.

## Functions Overview

### 1. **Add New Customer**

This function adds a new customer to the system.

- **Parameters**:
  - `newC`: Object containing customer details (ID, name, and booked tours).

- **Usage**:
  - To add a customer, you need to pass a customer object that includes the `customerID`, `name`, and an array of `bookedTours`.

### 2. **Book a Tour for a Customer**

This function books a tour for an existing customer.

- **Parameters**:
  - `cID`: The ID of the customer.
  - `tID`: The ID of the tour the customer wants to book.

- **Usage**:
  - To book a tour, call this function with the customer ID and tour ID. The customer will be added to the tour's list of booked customers, and the tour's booking count will be updated.

### 3. **Review a Tour**

Customers who have booked a tour can review it after attending the tour.

- **Parameters**:
  - `cID`: The ID of the customer.
  - `tID`: The ID of the tour.
  - `review`: A string containing the review text.

- **Usage**:
  - To review a tour, call this function with the customer ID, tour ID, and the review text. Customers can only review tours they have attended.

### 4. **Display All Tours with 'D' in the Name**

This function lists all tours that have the letter "D" in their name.

- **Usage**:
  - Call this function to see all tours whose names contain the letter "D".

### 5. **Assign an Agent to a Tour**

This function assigns an agent to manage a specific tour.

- **Parameters**:
  - `agentID`: The ID of the agent.
  - `tID`: The ID of the tour.

- **Usage**:
  - To assign an agent to a tour, call this function with the agent's ID and the tour ID. The agent will then be responsible for managing the tour.

### 6. **Cancel a Tour**

This function allows the cancellation of a tour that is scheduled to start in three days or less.

- **Parameters**:
  - `tID`: The ID of the tour to cancel.

- **Usage**:
  - To cancel a tour, call this function with the tour ID. The system checks if the tour is scheduled to start within the next three days and cancels it accordingly.

## Example Workflow

1. **Adding Customers**:
   - Add a new customer by providing their details, including their booked tours.
  
2. **Booking a Tour**:
   - Customers can book tours by specifying the tour ID they wish to join.
  
3. **Reviewing Tours**:
   - After attending the tour, customers can review their experiences.

4. **Assigning Agents**:
   - Assign agents to manage specific tours to handle the logistics and customer inquiries.

5. **Cancelling Tours**:
   - If a tour is booked within three days, the system can cancel the tour as needed.


[Download Tour Management README (Pure Word).docx](sandbox:/mnt/data/Tour_Management_README_Pure_Word.docx)
# References
Chatgpt is used to help me debug and fix some error. 

    1. [Node.js Documentation](https://nodejs.org/en/docs)
    2. [GitHub Markdown Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
    3. [JavaScript Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

