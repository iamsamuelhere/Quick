import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { Link, useParams } from 'react-router-dom';

const AuthView = () => {
  const [authForm, setAuthform] = useState({
    email: '',
    password: '',
  });
  const { action } = useParams();

  const isSignupAction = action == 'sign-up' ? true : false;
  const title = isSignupAction ? 'Create an Account' : 'Login to Account';
  const btnTitle = isSignupAction ? 'SignUp' : 'SignIn';
  const followupActions = isSignupAction ? (
    <p>
      Already have an account? <Link to={'/auth/sign-in'}>Signin</Link>
    </p>
  ) : (
    <p>
      Don't have an account?
      <br /> create one -<Link to={'/auth/sign-up'}>Signup</Link>
    </p>
  );

  const onChange = (e) => {
    setAuthform({ ...authForm, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        padding: '2px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1>Auth Page</h1>
        <h3>{title}</h3>
        <Input name="email" placeholder="Enter Email" onChange={onChange} />
        <br />
        <Input
          name="password"
          placeholder="Enter Password"
          type="password"
          onChange={onChange}
        />
        <br />
        <Button title={btnTitle} onClick={() => {}} />
        {followupActions}
      </div>
    </div>
  );
};

export default AuthView;
