import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    ),
    url("/login-back.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 12px;
  margin: 10px 0px;
  border: 1px solid #d16b1a;
  outline-color: #d16b1a;
  border-radius: 4px;
`;
const Button = styled.button`
  padding: 15px 20px;
  width: 40%;
  background-color: #d16b1a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const Link = styled.a`
  display: block;
  margin: 8px 0;
  font-size: 11px;
  cursor: pointer;
  color: gray;
  text-decoration: underline;

  &:hover {
    color: #d16b1a;
  }
`;
const Linke = styled.a`
  text-decoration: none;
  color: black;
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="UserName" />
          <Input placeholder="Email" />
        </Form>
        <Linke href="/">
          <Button>LOGIN</Button>
        </Linke>
        <Link>DO NOT YOU REMEMBER YOUR PASSWORD</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
}
