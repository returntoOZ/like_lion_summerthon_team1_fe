import React from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

//채팅방 생성
//테스트용 임시 페이지***

const Title = styled.h2`
    
`;

const RoomTitle = styled.input`
    
`;

const RoomHTag = styled.input`
    
`;

const CreateButton = styled.button`
    
`;

const CreateRoom = () => {

    const [newChatTitle, setTitle]=useState("");
    
    function insertTitle(e){
        setTitle(e.target.value);
        console.log(newChatTitle);
    }

    function buttonClick(){
        axios
            .post(`http://54.180.85.255/room_list_create/`,{
                name: newChatTitle,
                user: "ojh1"
            })
            .then(()=>{
                console.log('개설 성공');
            })
            .catch((e)=>{
                console.log(e);
            });
    }

    return (
        <div>
            <Title>채팅방 개설</Title>
            <RoomTitle placeholder='채팅방 이름 작성..' onChange={handleTitle} value={newChatTitle}></RoomTitle>
            {/* <RoomHTag></RoomHTag> */}
            <CreateButton onClick={buttonClick}>개설하기</CreateButton>
        </div>
    );
};

export default CreateRoom;