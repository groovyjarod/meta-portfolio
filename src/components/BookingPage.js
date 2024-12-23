import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router";
import { Stack, VStack, HStack, Image } from "@chakra-ui/react";
import { fetchAPI, submitAPI } from "../reusables/API";
import BookingForm from "./BookingForm";
import { primary } from "../reusables/styleGuide";
import photo1 from '../assets/restaurant.jpg'
import photo2 from '../assets/restaurant chef B.jpg'
import bookingCss from '../Booking.css'

const getTodaysDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const BookingPage = () => {
  const [date, setDate] = useState(getTodaysDate());
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    const check = submitAPI(data);
    if (check) {
      localStorage.setItem("bookingDetails", JSON.stringify(data));
      navigate("/booking-confirmed");
    }
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case date:
        return fetchAPI(date);
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    return fetchAPI(getTodaysDate());
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  // mostly unused as API implementation wasn't able to work and I had to instead bring the functions to
  // the workspace and make them their own .js file.
  useEffect(() => {
    setDate(getTodaysDate());
    const loadFunctions = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch script.");
        const content = await response.text();
        const module = {};
        const scriptEvaluator = new Function(
          "module",
          `${content}; return module;`
        );

        return scriptEvaluator(module);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  useEffect(() => {
    dispatch({ type: date });
  }, [date]);

  const bookingProps = {
    setDate,
    availableTimes,
    isLoading,
    setIsLoading,
    handleFormSubmit,
  };

  return (
    <>
      <Stack justifyContent="center" alignItems="center" height="160px" backgroundColor={primary} width="100%">
        <h1>Reserve a Table</h1>
      </Stack>
      <VStack width="100vw" justifyContent="center">
        <Stack height="64px"></Stack>
        <HStack justifyContent="space-between" width="100%" maxW="1050px" alignItems="center">
          <BookingForm {...bookingProps} />
          <VStack className="booking-photo-container" maxW="50%">
            <Image src={photo1} className="photo1" />
            <Image src={photo2} className="photo2" />
          </VStack>
        </HStack>

      </VStack>
    </>
  );
};

export default BookingPage;
