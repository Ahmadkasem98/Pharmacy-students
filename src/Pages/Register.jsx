import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("/register-back.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 12px;
  margin: 20px 10px 0px 0px;
  border: 1px solid #d16b1a;
  outline-color: #d16b1a;
  border-radius: 4px;
`;
const Agreement = styled.div`
  font-size: 15px;
  margin: 20px 0;
`;
const Button = styled.button`
  padding: 15px 20px;
  width: 40%;
  background-color: #d16b1a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Linke = styled.a`
  text-decoration: none;
  color: black;
`;

const B = styled.b`
  color: #d16b1a;
`;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="UserName" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </Form>
        <Agreement>
          By creating an account , I consent to the processing of my personal
          data in accordance with the <B>PRIVACY POLICY</B>
        </Agreement>
        <Linke href="/">
          <Button>CREATE</Button>
        </Linke>
      </Wrapper>
    </Container>
  );
}
