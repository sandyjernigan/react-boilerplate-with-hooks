import React from "react";
import * as Yup from "yup";

  // Basic submit event handler and console.log to confirm form submitted
  const formSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  // Create state for the form values. We will want to update state later on, but for now... empty strings!
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    password: ""
  });

  // State for the error messages
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: ""
  });

  // Validating with Yup
  const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    terms: Yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
      // required isn't required for checkboxes.
  });

// Define form elements: email, password and terms/conditions
function LoginForm() {
  return (
    <form>
      <label htmlFor="emailInput">
        Name
        <input id="emailInput" type="email" name="email" placeholder="Email" />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input id="passwordInput" type="password" name="password" placeholder="Password" />
      </label>
      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" />
      </label>
      <button>Submit!</button>
    </form>
  );