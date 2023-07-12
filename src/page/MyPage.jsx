import React, { useEffect, useState } from 'react';
import BottomBar from './component/SearchPageCom/bottomBar'
import MyHeader from './components/MyPage/MyHeader';
import MyPageBody from './components/MyPage/MyPageBody';
import axios from 'axios';
import UserTestImage from './components/MyPage/UserTestImage.jpg'
import { useParams } from 'react-router-dom';

const TestUserRoomInfo = {//axios 연결 했다고 치고 임의의 데이터
    user: 1,
    rooms : ["환승연애2 채팅방", "솔로지옥", "더글로리", "악귀"]
};

const MyPage = () => {

    const {Id3} = useParams();
    const [UserInfo, setUserInfo]=useState({});

    useEffect(()=>{
        axios
            .get(`https://soozzang.p-e.kr/user_info/${Id3}/`)
            .then((res)=>{
                console.log(res);
                setUserInfo(res.data);
                // console.log(UserInfo);
            })
            .catch((e)=>{
                console.log(e);
            })
    },[]);

    return (
        <div>
            <MyHeader UserInfo={UserInfo} UserImage={UserTestImage}></MyHeader>
            <MyPageBody UserInfo={TestUserRoomInfo}></MyPageBody>
            <BottomBar IdOfUser={Id3}></BottomBar>
        </div>
    );
};

export default MyPage;