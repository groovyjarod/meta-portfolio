import React, { useState, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router';
import { Stack } from "@chakra-ui/react";
import { fetchAPI, submitAPI } from '../reusables/API';
import BookingForm from './BookingForm';

const getTodaysDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};


const BookingPage = () => {
  const [time, setTime] = useState('Select a Time')
  const [date, setDate] = useState(getTodaysDate())
  const [numGuests, setNumGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleFormSubmit = (data) => {
    setIsLoading(prev => !prev)
    const newData = { date, time, numGuests, occasion }
    localStorage.setItem('bookingDetails', JSON.stringify(newData))
    const check = submitAPI(newData)
    setTimeout(() => {
      if (check) navigate('/booking-confirmed')
      setIsLoading(prev => !prev)
    }, 1000);
  }

  const updateTimes = (state, action) => {
    switch(action.type) {
      case date:
        return fetchAPI(date)
      default:
        return state
    }
  }

  const initializeTimes = () => {
    return fetchAPI(getTodaysDate())
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  // mostly unused as API implementation wasn't able to work and I had to instead bring the functions to
  // the workspace and make them their own .js file.
  useEffect(() => {
    setDate(getTodaysDate())
    const loadFunctions = async (url) => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch script.')
        const content = await response.text()
        const module = {};
        const scriptEvaluator = new Function("module", `${content}; return module;`);

        return scriptEvaluator(module);
      } catch(err) {
        console.error(err)
      }
    }
  }, [])

  useEffect(() => {
    setTime('Select a Time')
    dispatch({ type: date })
  }, [date])

  const bookingProps = {
    availableTimes,
    dispatch,
    date,
    setDate,
    time,
    setTime,
    numGuests,
    setNumGuests,
    occasion,
    setOccasion,
    isLoading,
    setIsLoading,
    handleFormSubmit,
  }

  return (
    <>
    <Stack height="128px"></Stack>
    <BookingForm {...bookingProps} />
    <Stack height="128px"></Stack>
    </>
  )
}

export default BookingPage