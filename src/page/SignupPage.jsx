import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const SignupPage = (props) => {
    const [Id, setID] =useState("") // ID 저장용 useState
    const [Password, setPassword] = useState("") //Password 저장용 useState

    function insertId(e){ // 입력된 ID 받아오는 함수
        setID(e.target.value)
    }

    function insertPassword(e){ // 입력된 Password 받아오는 함수
        setPassword(e.target.value)
    }

    function BtnClick(){
        axios
        .post('http://54.180.85.255/signup/',{ // 입력된 userID 와 password 정보를 post로 넘겨주는 코드
            userID : Id,
            password : Password
        })
        .then(() => {
            console.log(Id) // 제대로 작동하는 정보 넘겨줬는지 확인하는 코드 (ID check)
            console.log(Password) // 제대로 작동하는 정보 넘겨줬는지 확인하는 코드 (Password check)
        })
        .catch((e) => { // axios error check하는 코드
            console.log(e)
        });
    }
    
  return (
    <>
        {/* ID 입력칸 */}
        <input onChange={insertId} placehold="ID" value={Id}></input> 
        
        {/* Password 입력칸 */}
        <input onChange={insertPassword} placehold="Password" value={Password}></input>
        
        {/* 회원가입 버튼 */}
        <button onClick={BtnClick}>회원가입</button>
    </>
  );
};

export default SignupPage;