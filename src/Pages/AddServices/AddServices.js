import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch("https://dry-scrubland-06662.herokuapp.com/addaNewService", {

            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        reset();
        console.log(data);

    }
    return (
        <div>
            <h2>Add a New Destination </h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("name")} placeholder="Name" /> <br /> <br />
                <input  {...register("price")} type="number" placeholder="Price" /> <br /> <br />
                <input  {...register("description")} placeholder="Description" /> <br /> <br />
                <input  {...register("img")} placeholder="Image URL" /> <br /> <br />





                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div >
    );
};

export default AddServices;