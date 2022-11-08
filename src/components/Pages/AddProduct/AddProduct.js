// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="my-3 w-50 mx-auto">
      <h1>Please add a new product</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mt-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mt-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mt-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="mt-2" type="Submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
