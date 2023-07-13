import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const ServiceName = styled.p`

    font-size: 3rem;
    margin: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  `;

  const LoginContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
  `

  const LoginText = styled.div`
    font-size: 1.5rem;
    margin: 1rem;
    font-weight: bold;
    display: flex;
    padding-bottom: 1rem;
  `;

  const LinkDiv = styled.div`
    padding : 2rem 2rem 2rem 0rem;
    display: flex;
    flex-direction: column;
  `;

  const SignupLink = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
  `;

  const LoginButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 0rem 1rem 1rem 1rem;

  `;

  const LoginButton = styled.button`
    background-color: skyblue;
    width: 17rem;
    height: 4rem;
    border-radius: 1rem;
    border: 0;
    box-shadow: 0rem 0.3rem 0.3rem gray;
  `;

  const LoginButtonText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    margin: 0;
    justify-content: center;
  `;

  const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
`;

const IdBox = styled.div`
  width: 13rem;
  padding-bottom: 1rem;
`;

const IdText = styled.p`
  font-size: 0.8rem;
  color: gray;
  font-weight: bold;
`;

const IdInput = styled.input`
  width: 12rem;
  border-radius: 2rem;
  background-color: #a5d7f4;
  opacity: 0.5;
  padding-left : 1rem;
  border-style: none;
  height: 2rem;
  box-shadow: 0rem 0.3rem 0.3rem gray;
`;

const PasswordBox = styled.div`
  width: 13rem;
`;

const PasswordText = styled.p`
  font-size: 0.8rem;
  color: gray;
  font-weight: bold;
`;

const PasswordInput = styled.input`
  width: 12rem;
  border-radius: 2rem;
  background-color: #a5d7f4;
  opacity: 0.5;
  border-style: none;
  height: 2rem;
  padding-left : 1rem;
  box-shadow: 0rem 0.3rem 0.3rem gray;
`;

const LoginPage = (props) => {
  const [id, setId] = useState(""); // ID 저장용 useState
  const [password, setPassword] = useState(""); //Password 저장용 useState

  const navigate = useNavigate();

  const insertId = (e) => {
    // 입력된 ID 받아오는 함수
    setId(e.target.value);
  }

  const insertPassword = (e) => {
    // 입력된 Password 받아오는 함수
    setPassword(e.target.value);
  };

  function BtnClick() {
    if (id === "") {
      alert("아이디를 입력하세요.");
      return;
    }

    if (password === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }

    axios
      .post("https://soozzang.p-e.kr/login/", {
        // 입력된 userID 와 password 정보를 post로 넘겨주는 코드
        userID: id,
        password: password,
      })
      .then((res) => {
        console.log(id); // 제대로 작동하는 정보 넘겨줬는지 확인하는 코드 (ID check)
        console.log(password); // 제대로 작동하는 정보 넘겨줬는지 확인하는 코드 (Password check)
        navigate(`/main/${res.data.id}`);
      })
      .catch((e) => {
        // axios error check하는 코드
        console.log(e);
        alert("일치하는 회원 정보가 없습니다.")
      });
  };

  return (
    <>
      <ServiceName>breeze</ServiceName>

      <LoginContainer>

        <InputBox>

          <IdBox>
            <IdText>아이디 입력</IdText>
            <IdInput placeholder="ID" onChange={insertId} value={id}></IdInput>
          </IdBox>

          <PasswordBox>
            <PasswordText>비밀번호 입력</PasswordText>
            <PasswordInput placeholder="Password" type="password" onChange={insertPassword} value={password}></PasswordInput>
          </PasswordBox>

        </InputBox>

      </LoginContainer>

      <LinkDiv>
        <SignupLink>
          <Link to={`/signup`}>회원가입</Link>
        </SignupLink>
      </LinkDiv>

      <LoginButtonDiv>
        <LoginButton onClick={BtnClick}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
      </LoginButtonDiv>
    </>
  );
};

export default LoginPage;
