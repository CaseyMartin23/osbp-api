import React, { useState } from 'react';
import styled from 'styled-components';

const LoginFormLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: purple;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  background-color: green;
  padding: 20px;
`;

const FormField = styled.div``;

const Login = () => {
  const [formData, setFormData] = useState();

  return (
    <LoginFormLayout>
      <StyledForm>
        <div>
          <label>Email</label>
          <br />
          <input />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input />
        </div>
        <div>
          <button>LOGIN</button>
        </div>
      </StyledForm>
    </LoginFormLayout>
  );
};

export default Login;
