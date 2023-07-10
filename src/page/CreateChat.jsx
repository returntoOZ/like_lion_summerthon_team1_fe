import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { styled } from 'styled-components';

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
`;

const CreateChat = () => {

    const navigate = useNavigate();
    const[chatting,setChat]=useState("");
    const[hashtag,setHash]=useState("");
    
    // 채팅방 이름
    const handleChat=(e)=>{
      setChat(e.target.value);
    }
    // 해시태그 추가하기
    const handleHash=(e)=>{
      setHash(e.target.value)
    }
    // 채팅방 개설완료시
    // const handleSubmit = () => {
    //   api
    //   .createChat(ownerId, subject, content)
    //   .then((_) => {
    //     navigate(-1);
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
    // }
    return (
        <>
        <h1>채팅방 개설</h1>
        {/* 채팅방 프로필 이미지 위에 Profile, ProfileImg사용 */}

        <input name="chatting" placeholder="채팅방 이름" onChange={handleChat}  value={chatting}/>
        <br />
        <textarea name="hashtag" placeholder="해시태그 추가하기" onChange={handleHash} value={hashtag}/>
        {/* <button onClick={() => navigate(`/articles/${articleId}/edit`)}>개설 완료</button> 개설완료시 알림창 뜨는 걸로 연결 */}
        {/* <script>alert("채팅방 개설을 원하십니까? 이미 존재하는 프로그램의 오픈채팅방 개설은 제한됩니다. 관리자의 승인 후 개설됩니다.");</script> */}
        {/* <button onClick={ArticleDelete}>개설 취소</button> */}
        </>
    );
};

export default CreateChat;