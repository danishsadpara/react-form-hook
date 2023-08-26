// ReactForm.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
type FormValues={  
    username:"string",
    email:"string",
    channel:"string"
}
const ReactForm = () => {
  const { register, control, handleSubmit } = useForm<FormValues>();
const onSubmit =(data:FormValues)=>{
    console.log(data)
}
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label" htmlFor="username">
          User Name:
        </label>
        <input className="form-input" type="text" id="username" {...register('username')} />
        <br />
        <label className="form-label" htmlFor="email">
          Email Address:
        </label>
        <input className="form-input" type="email" id="email" {...register('email')} />
        <br />
        <label className="form-label" htmlFor="channel">
          Channel
        </label>
        <input className="form-input" type="text" id="channel" {...register('channel')} />
        <button className='submit-button '>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ReactForm;
