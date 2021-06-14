import React from "react";

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