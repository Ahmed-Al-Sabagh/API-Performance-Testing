// Remove the old import statement:
// import { Table } from "console-table-printer";

// Use require() for both libraries:
const fetch = require("node-fetch");
const { Table } = require("console-table-printer");

async function createBooking() {
  const url = "https://restful-booker.herokuapp.com/booking";

  const body = {
    firstname: "Ahmed",
    lastname: "Al Sabbagh",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
    
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const p = new Table();

    p.addRow({
      Status: response.status,
      "Booking ID": data.bookingid,
      "First Name": data.booking.firstname,
      "Last Name": data.booking.lastname,
      "Total Price": data.booking.totalprice,
      Checkin: data.booking.bookingdates.checkin,
      Checkout: data.booking.bookingdates.checkout,
    });

    p.printTable();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

createBooking();
