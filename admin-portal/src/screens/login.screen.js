import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthService from "../services/auth.service";

const LoginFormLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: #e6e6e6;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 4px;
  width: 400px;
  width: 350px;
`;

const FormField = styled.div`
  margin: 0px 20px 20px 20px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 300px;
  padding: 5px;
  margin-top: 10px;
`;

const LoginButton = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: #0086b2;
  color: #ffffff;
`;

const Login = () => {
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = ({ target }) => {
    const { type, value } = target;
    setFormData({ ...formData, [type]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('formData:', formData);
    setIsLoading(true)
    await AuthService.logInUser(formData)
    setIsLoading(false)
  }

  return (
    <LoginFormLayout>
      <StyledForm onSubmit={handleSubmit}>
        <FormField>
          <FormLabel>Email</FormLabel>
          <br />
          <FormInput
            type="email"
            placeholder="Enter email address"
            onChange={handleInputChange}
          />
        </FormField>
        <FormField>
          <FormLabel>Password</FormLabel>
          <br />
          <FormInput
            type="password"
            placeholder="Enter password"
            onChange={handleInputChange}
          />
        </FormField>
        <FormField style={{ marginTop: 30, marginBottom: 0 }}>
          <LoginButton type="submit">LOGIN</LoginButton>
        </FormField>
      </StyledForm>
    </LoginFormLayout>
  );
};

export default Login;
