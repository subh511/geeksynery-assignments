import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    history.push('/login');
  };

  return (
    <div>
      <h1>User Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input type="text" {...register('name', { required: true })} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...register('password', { required: true })} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email', { required: true })} />
        </div>
        <div>
          <label>Phone number:</label>
          <input type="tel" {...register('phone', { required: true })} />
        </div>
        <div>
          <label>Profession:</label>
          <select {...register('profession', { required: true })}>
            <option value="student">Student</option>
            <option value="developer">Developer</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
