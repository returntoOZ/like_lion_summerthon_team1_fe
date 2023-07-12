import React from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import BottomBar from './component/SearchPageCom/bottomBar';
import { useParams } from 'react-router-dom';

//채팅방 생성
//예원님이 보내주신 CreateChat.jsx와 (직접)merge
//RoomEnter Error,,

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const Title = styled.h2`
    
`;

const RoomTitle = styled.input`
    
`;

const CreateButton = styled.button`
    
`;

const InsertHashtag = styled.textarea`
    
`;

const CreateRoom = () => {

    const {Id4} = useParams();

    const [newChatTitle, setTitle]=useState("");
    const [RoomId, setRoomId] = useState();

    function insertTitle(e){
        setTitle(e.target.value);
        console.log(newChatTitle);
    }

    function RoomEnter(){
        axios
            .post(`https://soozzang.p-e.kr/room/${RoomId}/enter/`)
            .then(()=>{
                console.log('Room enter!');
            })
            .catch((e)=>{
                console.log('Cannot Enter!');
                console.log(RoomId);
                console.log(e);
            });
    };

    function buttonClick(){
        axios
            .post(`https://soozzang.p-e.kr/room_list_create/`,{
                name : newChatTitle,
                user : [Id4],
                category : 2
            })
            .then((res)=>{
                console.log(res);
                setRoomId(res.data.room_id);
                // RoomEnter();
            })
            .catch((e)=>{
                console.log(e);
            });
    };

    function buttonDelete(){
        axios
            .delete(`https://soozzang.p-e.kr/room/12/`)
            .then(()=>{
                console.log('삭제완료!');
            })
            .catch((e)=>{
                console.log(e);
            });
    };

    function CheckInfo(){
        axios
            .get(`https://soozzang.p-e.kr/my_info/`)
            .then((res)=>{
                console.log('사용자 정보');
                console.log(res);
            })
            .catch((e)=>{
                console.log(e);
            });
    };

    return (
        <div>
            <Title>채팅방 개설</Title>
            <RoomTitle placeholder='채팅방 이름 작성..' onChange={insertTitle} value={newChatTitle}></RoomTitle>
            <InsertHashtag placeholder='해시태그 추가하기'></InsertHashtag>
            <CreateButton onClick={buttonClick}>개설하기</CreateButton>
            <button onClick={buttonDelete}>임시 삭제버튼</button>
            <button onClick={CheckInfo}>사용자 확인버튼</button>
            <button onClick={RoomEnter}>채팅방 입장하기</button>
            <BottomBar IdOfUser={Id4}></BottomBar>
        </div>
    );
};

export default CreateRoom;