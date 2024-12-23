import React from "react";
import { VStack, Stack, Button } from "@chakra-ui/react";
import { primary } from "../reusables/styleGuide";
import { Link } from "react-router";

const ConfirmedBooking = () => {
  const { date, time, numGuests, occasion } = JSON.parse(
    localStorage.getItem("bookingDetails")
  );

  const _newDate = new Date(date);
  const newDate = _newDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        height="160px"
        backgroundColor={primary}
        width="100%"
      >
        <h1>Confirmation</h1>
      </Stack>
      <Stack height="64px"></Stack>
      <VStack justifyContent="center" width="100vw">
        <VStack gap="16px" width="100%" alignItems="start" maxW="1050px">
          <h2 className="black">Success!</h2>
          <span>
            You have a confirmation for a booking at {time} on {newDate}.
          </span>
          <span>
            {numGuests} {numGuests > 1 ? "guests" : "guest"} will accompany you
            as you celebrate {occasion === "Anniversary" ? "an" : "a"}{" "}
            {occasion}.
          </span>
          <span>We look forward to seeing you.</span>
          <Link to="/">
            <Button width="250px">Return Home</Button>
          </Link>
        </VStack>
      </VStack>
    </>
  );
};

export default ConfirmedBooking;
