import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./contact.css";

const Contact = () => {
  
  const submit = (data,e) => {
    const url =
      "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users";
    const requestOptions = {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({data}),
    };

    fetch(url, requestOptions)
      
      .then((data) => console.log("Successful", data))
      .catch((error) => console.log("Error", error));
      alert(`Thank you for submitting`)
      e.target.reset()
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isLoading = false;

  return (
    <form className="emailForm" onSubmit={handleSubmit(submit)}>
    <h2 className ='title'>Contact US</h2>
      <label htmlFor="Name" className="nameLabel">
        Name
      </label>
      <input
        className="nameInput"
        disabled={isLoading}
        type="text"
        name="name"
        {...register("name", { required: "Please enter your name" })}
      />

      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <p className="error">{message}</p>}
      />
      <label htmlFor="Email" className="emailLabel">
        Email
      </label>
      <input
        className="emailInput"
        disabled={isLoading}
        type="text"
        name="email"
        {...register("email", {
          required: "Please enter an email",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Please enter Valid Email",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <p className="error">{message}</p>}
      />
      <label htmlFor="Birthday" className="birthdayLabel">
        Birthday
      </label>
      <input
        
        className="birthdayInput"
        {...register("Birthday", {
          pattern: {
            value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
            message:
              "Date of Birth must be a valid date in the format YYYY-MM-DD",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Birthday"
        render={({ message }) => <p className="error">{message}</p>}
      />
      <input className="submitButton" type="submit" />
      <button type ='reset' className='submitButton'>Clear</button>
      
      <label htmlFor="acceptTerms" className="acceptTermsLabel">
        Please Check to Accept Terms
      </label>
      <input
        name="emailConsent"
        type="checkbox"
        className="acceptTermsInput"
        disabled={isLoading}
        {...register("acceptTerms", {
          required: "Please check the box to register",
        })}
      />
      <ErrorMessage
        errors={errors}
        name="emailConsent"
        render={({ message }) => <p className="error">{message}</p>}
      />
      
    </form>
  );
};
export default Contact;
