import React from 'react'
import {useForm} from 'react-hook-form'
const ReactForm = () => {
    const {register} =useForm()
  return (
    <div>
        <form>
            <label htmlFor="username">User Name:</label>
            <input type="text" id='username' {...register("username")} />
            <br />
            <label htmlFor="email">Email Address:</label>
            <input type="email" id='email' {...register("email")} />
            <br />
            <label htmlFor="channel">Channel</label>
            <input type="text" id='text'{...register("channel")}/>
        </form>
    </div>
  )
}

export default ReactForm