import React from 'react';
import { styled } from 'styled-components';
import CardList from './CardList';

const ChatList2Container = styled.div`
    border-radius: 20px;
    border: none;
    background: rgba(165, 215, 244, 0.39);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    margin:  0 2rem 0 2rem;
`;

const ChatListName = styled.h3`
    margin: 0px;
    padding: 1rem 0 1rem 1rem;
    font-size: 1.5rem;
`;


const ChatList2 = (props) => {
    //최근 참여한 채팅방 => 최다 참여 채팅방으로 수정
    return (
        <ChatList2Container>
            <ChatListName>최다 참여 채팅방</ChatListName>
            <div>
                <CardList SortOption="MostJoin" DataOption={props.TestData}></CardList>
            </div>
        </ChatList2Container>
    );
};

export default ChatList2;