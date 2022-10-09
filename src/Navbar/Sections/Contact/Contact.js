import React from "react";
import { useForm } from "react-hook-form";
import "./Formulaire.css";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="body">
      <form onSubmit={handleSubmit(onSubmit)} method="post">
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
    </div>
  );
}

export default Contact;
