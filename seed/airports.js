const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const airports = [
        {
            name: "Boston Logan International Airport",
            location: "Boston, MA",
            code: "BOS",
        },
        {
            name: "Los Angeles International Airport",
            location: "Los Angeles, CA",
            code: "LAX",
        },
        {
            name: `Chicago O'Hare International Airport`,
            location: "Chicago, IL",
            code: "ORD",
        },
        {
            name: "Denver International Airport",
            location: "Denver, CO",
            code: "DEN",
        },
        {
            name: "Dallas International Airport",
            location: "Dallas, TX",
            code: "DFW",
        },
        {
            name: "LaGuardia International Airport",
            location: "New York, NY",
            code: "LGA",
        },
    ]
    await Airport.insertMany(airports)
    console.log('Created airports')
}

const run = async () => {
    await main()
    db.close()
}

run()