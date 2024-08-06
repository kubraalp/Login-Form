import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100%;
  background-color: #20c997;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Container = styled.div`
  border-radius: 0.5rem;
  background-color: #ffffff;
  border: 0.1rem solid #7d7a7b;
  color: #04956a;
  padding: 2em 2em;
  justify-content: center;
  width: 20rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom:-0.5rem;
`;

const Input = styled.input`
border: 1px solid #b7dfd3;
  background-color: #f5f0f0;
  height: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 0.2rem;
`;

const Button = styled.button`
color: white;
font-size: 1.5rem;
  height: 3rem;
  background-color: #20c997;
  border-radius: 0.2rem;
  border: #20c997;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

function Login() {
  return (
    <Main>
      <Container>
        <H1> Login Formu</H1>
        <Form>
          <Label>Email</Label>
          <Input type="email" />

          <Label> Password</Label>
          <Input type="password" />
          <Button>Login</Button>
        </Form>
      </Container>
    </Main>
  );
}

export default Login;
