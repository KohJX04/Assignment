# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

from docx import Document

# Create a new Word document
doc = Document()

# Title
doc.add_heading("Tour Management Node Module", level=1)

# Description
doc.add_paragraph(
    "This module provides functionalities to manage customers, tours, and agents. "
    "It includes features such as adding new customers, booking tours, reviewing tours, "
    "assigning agents, displaying specific tours, and canceling tours."
)

# Setup Instructions
doc.add_heading("Setup Instructions", level=2)
doc.add_paragraph(
    "1. Ensure you have Node.js installed on your system.\n"
    "2. Create a project folder and navigate to it in your terminal.\n"
    "3. Save the module file as tourManagement.js in the project folder.\n"
    "4. Create an app.js file (or similar) to import and test the module.\n"
    "5. Run node app.js to execute your code."
)

# How to Use the Module
doc.add_heading("How to Use the Module", level=2)
doc.add_paragraph("1. Import the Module").add_paragraph(
    "In your app.js file, import the module:\n\n"
    "```javascript\n"
    "const tourManagement = require('./tourManagement');\n"
    "```"
)
doc.add_paragraph("2. Call Functions").add_paragraph(
    "You can call various functions from the module to manage tours, customers, and agents."
)

# Functions and Usage
doc.add_heading("Functions and Usage", level=3)

functions = [
    {
        "title": "Add a New Customer",
        "description": "Adds a customer to the system.",
        "usage": (
            "```javascript\n"
            "tourManagement.addCustomer({\n"
            "    customerID: 800005,\n"
            "    name: \"New Customer\",\n"
            "    bookedTours: []\n"
            "});\n"
            "```"
        ),
        "parameters": (
            "- `customerID` (Number): Unique identifier for the customer.\n"
            "- `name` (String): Name of the customer.\n"
            "- `bookedTours` (Array): List of tour IDs booked by the customer."
        ),
    },
    {
        "title": "Assign an Agent to a Tour",
        "description": "Assigns an agent to manage a specific tour.",
        "usage": (
            "```javascript\n"
            "tourManagement.assignAgentToTour(1001, \"A002\");\n"
            "```"
        ),
        "parameters": (
            "- `agentID` (Number): Unique ID of the agent.\n"
            "- `tourID` (String): ID of the tour to assign."
        ),
    },
    {
        "title": "Display Tours Containing 'D'",
        "description": "Displays all tours with names containing the letter 'D'.",
        "usage": (
            "```javascript\n"
            "tourManagement.displayToursWithD();\n"
            "```"
        ),
    },
    {
        "title": "Book a Tour for a Customer",
        "description": "Books a tour for a customer if they have not already booked it.",
        "usage": (
            "```javascript\n"
            "tourManagement.bookTour(800002, \"A004\");\n"
            "```"
        ),
        "parameters": (
            "- `customerID` (Number): ID of the customer.\n"
            "- `tourID` (String): ID of the tour."
        ),
    },
    {
        "title": "Review a Tour",
        "description": "Allows a customer to review a tour they’ve attended after its start date.",
        "usage": (
            "```javascript\n"
            "tourManagement.reviewTour(800001, \"A001\", \"Amazing experience!\");\n"
            "```"
        ),
        "parameters": (
            "- `customerID` (Number): ID of the customer.\n"
            "- `tourID` (String): ID of the tour.\n"
            "- `review` (String): Customer’s review."
        ),
    },
    {
        "title": "Cancel a Tour",
        "description": "Cancels a tour if it is more than 3 days before the start date.",
        "usage": (
            "```javascript\n"
            "tourManagement.cancelTour(\"A003\");\n"
            "```"
        ),
        "parameters": "- `tourID` (String): ID of the tour.",
    },
]

for func in functions:
    doc.add_heading(func["title"], level=4)
    doc.add_paragraph(func["description"])
    doc.add_paragraph("**Usage:**").add_paragraph(func["usage"])
    if "parameters" in func:
        doc.add_paragraph("**Parameters:**").add_paragraph(func["parameters"])

# Example Usage in app.js
doc.add_heading("Example Usage in app.js", level=3)
doc.add_paragraph(
    "```javascript\n"
    "const tourManagement = require('./tourManagement');\n\n"
    "// Add a new customer\n"
    "tourManagement.addCustomer({\n"
    "    customerID: 800006,\n"
    "    name: \"Alice\",\n"
    "    bookedTours: []\n"
    "});\n\n"
    "// Book a tour for a customer\n"
    "tourManagement.bookTour(800006, \"A001\");\n\n"
    "// Assign an agent to a tour\n"
    "tourManagement.assignAgentToTour(1002, \"A004\");\n\n"
    "// Display tours containing 'D'\n"
    "tourManagement.displayToursWithD();\n\n"
    "// Review a tour\n"
    "tourManagement.reviewTour(800001, \"A001\", \"Wonderful experience!\");\n\n"
    "// Cancel a tour\n"
    "tourManagement.cancelTour(\"A003\");\n"
    "```"
)



# References
Chatgpt is used to help me debug and fix some error. 
doc.add_heading("References", level=2)
doc.add_paragraph(
    "1. [Node.js Documentation](https://nodejs.org/en/docs)\n"
    "2. [GitHub Markdown Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)\n"
    "3. [JavaScript Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)"
)
