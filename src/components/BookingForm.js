import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Select,
  VStack,
  Spinner,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import css from '../BookingForm.css'

const formStyle = {
  display: "grid",
  maxWidth: "200px",
  gap: "20px",
};

const BookingForm = ({
  setDate,
  availableTimes,
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
        setIsLoading(prev => !prev)
        handleFormSubmit(values)
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
    <VStack width="100%">
      <Box p={6} rounded="md" width="100%">
        <form style={formStyle} onSubmit={handleSubmit}>
          <VStack gap="24px">
            <FormControl isInvalid={errors.date && touched.date}>
              <FormLabel className="form-control-label" htmlFor="date">Date</FormLabel>
              <Input
                border="2px solid #495e57"
                width="350px"
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
              <FormLabel className="form-control-label" htmlFor="time">Time</FormLabel>
              <Select
                border="2px solid #495e57"
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
              <FormLabel className="form-control-label" htmlFor="numGuests">Number of Guests</FormLabel>
              <Input
                border="2px solid #495e57"
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
              <FormLabel className="form-control-label" htmlFor="occasion">Occasion</FormLabel>
              <Select
                border="2px solid #495e57"
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

            <Button width="100%" aria-label="On Click" type="submit" isDisabled={ !values.date || !values.numGuests || !values.time || !values.occasion || isLoading }>
              {isLoading ? <Spinner /> : "Submit"}
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default BookingForm;
