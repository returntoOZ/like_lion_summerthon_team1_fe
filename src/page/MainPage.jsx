import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ChatSort1 from './components/MainPage/ChatSort1';
import ChatSort2 from './components/MainPage/ChatSort2';
import MainHeader from './components/MainPage/MainHeader';
import testImage from './components/MainPage/testImage.jpg';
import BottomBar from './component/SearchPageCom/bottomBar';



// const TestArray = [
//     {
//         id: 1,
//         chatName: "예시1",
//         chatImage: testImage,
//         join: 20,
//         view: 30,
//         searched:1
//     },
//     {
//         id: 2,
//         chatName: "예시1",
//         chatImage: testImage,
//         join: 40,
//         view: 45,
//         searched:2
//     },
//     {
//         id: 3,
//         chatName: "예시1",
//         chatImage: testImage,
//         join: 50,
//         view: 55,
//         searched:3
//     },
//     {
//         id: 4,
//         chatName: "예시1",
//         chatImage: testImage,
//         join: 10,
//         view: 44,
//         searched:4
//     },
//     {
//         id: 5,
//         chatName: "예시1",
//         chatImage: testImage,
//         join: 55,
//         view: 49,
//         searched:5
//     },
//     {
//         id: 6,
//         chatName: "예시1",
//         chatImage: testImage,
//         join: 39,
//         view: 60,
//         searched:6
//     }
// ];

const MainPage = () => {
    const {Id1} = useParams();
    //**왜인지 모르겠는데 useParams 성공**

    return (
        <>
            <MainHeader IdOfUser={Id1}></MainHeader>
            <ChatSort1 IdOfUser={Id1}></ChatSort1>
            <ChatSort2 ></ChatSort2>
            <br/>
            <br/>
            <br/>
            <BottomBar IdOfUser={Id1}></BottomBar>
        </>
    );
};

export default MainPage;