import { useForm } from "react-hook-form";
import axios from "axios";
import { Display } from "../Display";
import { useState } from "react";

export function Login() {
  const { register, handleSubmit } = useForm();
  const [ response, setResponse ] = useState('')

  function submit(formData) {
    axios
      .post("https://kenzieshop.herokuapp.com/login", formData)
      .then((response) => {
        setResponse(response)
      })
      .catch((err) => {
        setResponse(err.response)
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input type="email" {...register("email")} />
        <input type="password" {...register("password")} />
        <button type="submit">Login</button>
      </form>
      <Display response={response} />
    </>
  );
}
