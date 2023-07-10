import React, { useEffect } from 'react';
import BottomBar from './component/SearchPageCom/bottomBar'
import MyHeader from './components/MyPage/MyHeader';
import MyPageBody from './components/MyPage/MyPageBody';
import axios from 'axios';
import UserTestImage from './components/MyPage/UserTestImage.jpg'
import { useParams } from 'react-router-dom';

const TestUserInfo = {//axios 연결 했다고 치고 임의의 데이터
    user: 1,
    rooms : ["환승연애2 채팅방", "솔로지옥", "더글로리", "악귀"]
};

const MyPage = () => {

    // const Id = useParams();

    // useEffect(()=>{
    //     axios
    //         .get(`http://54.180.85.255/myinfo/${Id}/`)
    //         .then((res)=>{
    //             console.log(res);
    //         })
    //         .catch((e)=>{
    //             console.log(e);
    //         })
    // },[]);

    return (
        <div>
            <MyHeader UserInfo={TestUserInfo}></MyHeader>
            <MyPageBody UserInfo={TestUserInfo}></MyPageBody>
            <BottomBar></BottomBar>
        </div>
    );
};

export default MyPage;