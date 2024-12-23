import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Heading,
  Select,
  VStack,
  Spinner,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
} from "@chakra-ui/react";

const formStyle = {
  display: "grid",
  maxWidth: "200px",
  gap: "20px",
};

const formItem = {
  border: "1px solid black",
  borderRadius: "4px",
};

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  numGuests,
  setNumGuests,
  availableTimes,
  occasion,
  setOccasion,
  isLoading,
  setIsLoading,
  handleFormSubmit,
}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      date: "",
      time: "",
      numGuests: 1,
      occasion: "",
    },
    onSubmit: (values) => {
      setIsLoading(prev => !prev)
      setTimeout(() => {
        console.log(values)
        setIsLoading(prev => !prev)
      }, 1000);
    //   handleFormSubmit(values)
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required."),
      time: Yup.string().required("Please select an available time."),
      numGuests: Yup.number().required("Please input a number.").positive("Number must be greater than 0.").integer("Number has to be a whole number."),
      occasion: Yup.string().required("Please select an occasion."),
    }),
  });

  useEffect(() => {
    setDate(values.date)
    values.time = ""
    values.occasion = ""
  }, [values.date])

  return (
    <VStack>
      <Heading as="h1">Reserve a Table</Heading>
      <Box p={6} rounded="md" w="100%">
        <form style={formStyle} onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.date && touched.date}>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input
                name="date"
                type="date"
                id="res-date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>Date is required.</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.time && touched.time}>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Select
                id="res-time"
                name="time"
                value={values.time}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select a Time"
                disabled={!values.date}
              >
                {Array.isArray(availableTimes) &&
                  availableTimes.map((time, index) => (
                    <option value={time} key={index}>
                      {time}
                    </option>
                  ))}
              </Select>
              <FormErrorMessage>Please select a time.</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.numGuests && touched.numGuests}>
              <FormLabel htmlFor="numGuests">Number of Guests</FormLabel>
              <Input
                name="numGuests"
                type="number"
                value={values.numGuests}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>
                Please indicate number of guests.
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.occasion && touched.occasion}>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select
                name="occasion"
                onChange={handleChange}
                value={values.occasion}
                onBlur={handleBlur}
                placeholder="Select an Occasion"
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Select>
              <FormErrorMessage>Please select an occasion.</FormErrorMessage>
            </FormControl>

            <Button aria-label="On Click" type="submit" isDisabled={ !values.date || !values.numGuests || !values.time || !values.occasion || isLoading }>
              {isLoading ? <Spinner /> : "Submit"}
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default BookingForm;
