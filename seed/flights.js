const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const BOS = await Airport.find({ code: 'BOS' })
    const LAX = await Airport.find({ code: 'LAX' })
    const ORD = await Airport.find({ code: 'ORD' })
    const DEN = await Airport.find({ code: 'DEN' })
    const DFW = await Airport.find({ code: 'DFW' })
    const LGA = await Airport.find({ code: 'LGA' })
    
    const flights = [
        {
            airline: "Delta Airlines",
            flight_number: 450,
            price: 250,
            numberOfSeats: 150,
            departingAirport: BOS[0]._id,
            arrivalAirport: LAX[0]._id,
            departureDate: "2024-10-15T09:30:00"
        },
        {
            airline: "American Airlines",
            flight_number: 103,
            price: 300,
            numberOfSeats: 180,
            departingAirport: ORD[0]._id,
            arrivalAirport: DEN[0]._id,
            departureDate: "2024-10-20T14:45:00"
        },
        {
            airline: "United Airlines",
            flight_number: 789,
            price: 275,
            numberOfSeats: 160,
            departingAirport: LAX[0]._id,
            arrivalAirport: DFW[0]._id,
            departureDate: "2024-10-22T08:15:00"
        },
        {
            airline: "Southwest Airlines",
            flight_number: 234,
            price: 150,
            numberOfSeats: 140,
            departingAirport: DEN[0]._id,
            arrivalAirport: LGA[0]._id,
            departureDate: "2024-10-18T12:00:00"
        },
        {
            airline: "JetBlue Airways",
            flight_number: 987,
            price: 220,
            numberOfSeats: 130,
            departingAirport: BOS[0]._id,
            arrivalAirport: ORD[0]._id,
            departureDate: "2024-10-16T16:30:00"
        },
        {
            airline: "Alaska Airlines",
            flight_number: 543,
            price: 350,
            numberOfSeats: 110,
            departingAirport: LGA[0]._id,
            arrivalAirport: DFW[0]._id,
            departureDate: "2024-10-25T11:20:00"
        },
        {
            airline: "Spirit Airlines",
            flight_number: 301,
            price: 99,
            numberOfSeats: 200,
            departingAirport: ORD[0]._id,
            arrivalAirport: LAX[0]._id,
            departureDate: "2024-10-30T07:00:00"
        },
        {
            airline: "Frontier Airlines",
            flight_number: 112,
            price: 85,
            numberOfSeats: 180,
            departingAirport: DFW[0]._id,
            arrivalAirport: DEN[0]._id,
            departureDate: "2024-10-12T10:00:00"
        },
        {
            airline: "Alaska Airlines",
            flight_number: 324,
            price: 299,
            numberOfSeats: 120,
            departingAirport: LAX[0]._id,
            arrivalAirport: BOS[0]._id,
            departureDate: "2024-10-28T13:30:00"
        },
        {
            airline: "JetBlue Airways",
            flight_number: 678,
            price: 230,
            numberOfSeats: 140,
            departingAirport: LGA[0]._id,
            arrivalAirport: ORD[0]._id,
            departureDate: "2024-10-14T15:45:00"
        },
        {
            airline: "Southwest Airlines",
            flight_number: 455,
            price: 195,
            numberOfSeats: 150,
            departingAirport: DEN[0]._id,
            arrivalAirport: LAX[0]._id,
            departureDate: "2024-10-21T18:00:00"
        },
        {
            airline: "American Airlines",
            flight_number: 214,
            price: 325,
            numberOfSeats: 160,
            departingAirport: BOS[0]._id,
            arrivalAirport: DFW[0]._id,
            departureDate: "2024-10-27T09:00:00"
        }        
    ]
    await Flight.insertMany(flights)
    console.log('created flights with airports')
}

const run = async () => {
    await main()
    db.close()
}

run()