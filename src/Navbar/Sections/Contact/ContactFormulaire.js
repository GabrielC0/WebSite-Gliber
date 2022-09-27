import "./ContactFormulaire.css";
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nom Prenom"
        {...register("Nom Prenom", {})}
      />
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: true })}
      />
      <input type="text" placeholder="Message" {...register("Message", {})} />

      <input type="submit" />
    </form>
  );
}
