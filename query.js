// Write your queries here
const db = require('./db')
const { Airport, Flight } = require('./models')
const ObjectId = require('mongodb').ObjectId


const findAirports = async () => {
  const airports = await Airport.find()
  console.log(airports)
}

const findFlights = async () => {
  const flights = await Flight.find()
  console.log(flights)
}

const findFlightByID = async () => {
  const flight = await Flight.find({ _id: new ObjectId("67073b1df1308ba882b5a3e4")})
  console.log(flight)
}

const findAirportByID = async () => {
  const airport = await Airport.find({ _id: new ObjectId("67073b0b907be13d6f252cea")})
  console.log(airport)
}

const createFlights = async () => {
  const departingAirport = await Airport.find({ _id: new ObjectId("67073b0b907be13d6f252cea")})
  const arrivalAirport = await Airport.find({_id: new ObjectId("67073b0b907be13d6f252cee")})

  let flight = await Flight.create({
    airline: "Delta Airlines",
    flight_number: 889,
    price: 600,
    numberOfSeats: 150,
    departingAirport: departingAirport._id,
    arrivalAirport: arrivalAirport._id,
    departureDate: "2024-10-16T14:55:00"
  })
  console.log(flight)
}

const updateAirport = async () => {
  const updated = await Airport.updateOne(
      { name: `Chicago O'Hare International Airport` }, //can change the target field to find by other info
      { name: `Chicago O'Hare Intn. Airport` } //new info
  )
  console.log(updated)
}

const updateFlight = async () => {
  const updated = await Flight.updateOne(
      { flight_number: 103, airline: "American Airlines" }, //can change the target field to find by other info
      { flight_number: 908 } //new info
  )
  console.log(updated)
}

const deleteFlight = async () => {
  const deleted = await Flight.deleteOne (
    { flight_number: '234', departureDate: "2024-10-18T12:00:00" }, 
)
console.log(deleted)
}

const deleteAirport = async () => {
  const deleted = await Airport.deleteOne (
    { name: 'Los Angeles International Airport', code: "LAX" }, 
)
console.log(deleted)
}

async function main() {
  try {
      await findAirports()
      // await findFlights()
      // await findFlightByID()
      // await findAirportByID()
      // await createFlights()
      // await updateAirport()
      // await updateFlight()
      // await deleteAirport()
      // await deleteFlight()
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()
