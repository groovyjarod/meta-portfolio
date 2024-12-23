import React from 'react'

const ConfirmedBooking = () => {
  const { date, time, numGuests, occasion } = JSON.parse(localStorage.getItem('bookingDetails'))
  return (
    <div>
      <p>{date}</p>
      <p>{time}</p>
      <p>{numGuests}</p>
      <p>{occasion}</p>
    </div>
  )
}

export default ConfirmedBooking