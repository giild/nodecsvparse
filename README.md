# Simple example of parsing CSV files to JSON

This is a simple example of how to use CSV parse library with NodeJS to convert data in CSV format to JSON

## Getting Started

1. clone the repository

2. run npm install


## Running the example

To run the example, execute the command in terminal on MacOS or powershell on Windows.

node parse_example.js

The example will save a file named data.json with the contents

# CSV

The first line of the CSV file has the header. The header defines the name of each column and will use it to create the JSON data. CSV can use different formats. If a column has comma, all of the columns may have quotes around it.