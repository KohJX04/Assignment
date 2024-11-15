# Assignment 1

Tour Management Node Module
This module provides functionalities to manage customers, tours, and agents. It includes features such as adding new customers, booking tours, reviewing tours, assigning agents, displaying specific tours, and canceling tours.

Setup Instructions
Ensure you have Node.js installed on your system.
Create a project folder and navigate to it in your terminal.
Save the module file as tourManagement.js in the project folder.
Create an app.js file (or similar) to import and test the module.
Run node app.js to execute your code.
How to Use the Module
Import the Module
In your app.js file, import the module:

javascript
Copy code
const tourManagement = require('./tourManagement');
Call Functions
You can call various functions from the module to manage tours, customers, and agents.

Functions and Usage
1. Add a New Customer
Adds a customer to the system.
Usage:

tourManagement.addCustomer({
    customerID: 800005,
    name: "New Customer",
    bookedTours: []
});


# References
Chatgpt is used to help me debug and fix some error. 
doc.add_heading("References", level=2)
doc.add_paragraph(
    "1. [Node.js Documentation](https://nodejs.org/en/docs)\n"
    "2. [GitHub Markdown Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)\n"
    "3. [JavaScript Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)"
)
