import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  HStack 
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = { 
  name: "", 
  email: "", 
  address: "",
  city: "",
  state:"TX",
  zip: "",
  phone_number: "", 
  last_4_cc: "",
  order_number: ""
};

const initState = { isLoading: false, error: "", values: initValues };

export default function Home() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [isOrderNumberValid, setIsOrderNumberValid] = useState(true);

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const validateOrderNumber = (orderNumber) => {
    return orderNumber === "" || /^\d{6}$/.test(orderNumber);
  };

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
    if (target.name == 'order_number')
      setIsOrderNumberValid(validateOrderNumber(target.value))
  }


  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Container maxW="450px" mt={12}>
      <Heading>Contact</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.address && !values.address}
      >
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          name="address"
          errorBorderColor="red.300"
          value={values.address}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <HStack> 
        <FormControl
          isRequired
          isInvalid={touched.city && !values.city}
        >
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            name="city"
            errorBorderColor="red.300"
            value={values.city}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.state && !values.state}
        >
          <FormLabel>State</FormLabel>
          <Input
            type="text"
            name="state"
            errorBorderColor="red.300"
            value={values.state}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.zip && (!values.zip || !/^\d{5}$/.test(values.zip))}
        >
          <FormLabel>Zip</FormLabel>
          <Input
            type="text"
            name="zip"
            errorBorderColor="red.300"
            value={values.zip}
            onChange={handleChange}
            onBlur={onBlur}
            pattern="\d{5}"
            maxLength="5"
          />
          <FormErrorMessage>
            {touched.zip && (!values.zip ? 'Required' : 'Must be exactly 5 digits')}
          </FormErrorMessage>
        </FormControl>
      </HStack> 

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.last_4_cc && (!values.last_4_cc || !/^\d{4}$/.test(values.last_4_cc))}
      >
        <FormLabel>Last 4 CC</FormLabel>
        <Input
          type="text"
          name="last_4_cc"
          errorBorderColor="red.300"
          value={values.last_4_cc}
          onChange={handleChange}
          onBlur={onBlur}
          pattern="\d{4}"
          maxLength="4"
        />
        <FormErrorMessage>
          {touched.last_4_cc && (!values.last_4_cc ? 'Required' : 'Must be exactly 4 digits')}
        </FormErrorMessage>
      </FormControl>


      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.phone_number && !values.phone_number}
      >
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          name="phone_number"
          errorBorderColor="red.300"
          value={values.phone_number}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl> 

      <FormControl
        mb={5}
        isInvalid={touched.order_number && !isOrderNumberValid}
      >
        <FormLabel>Order Number</FormLabel>
          <Input
            type="text"
            name="order_number"
            errorBorderColor="red.300"
            value={values.order_number}
            onChange={handleChange}
            onBlur={onBlur}
            pattern="\d{6}"
            maxLength="6"
        />
        <FormErrorMessage>
          {touched.order_number && !isOrderNumberValid ? "Order number must be 6 digits long or left blank" : ""}
        </FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || 
          !values.email || 
          !values.address ||
          !values.city ||
          !values.state ||
          !values.zip ||
          !values.phone_number || 
          !values.last_4_cc || 
          !isOrderNumberValid
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
  );
}
