import React from 'react';
import { styled } from 'styled-components';
import CardList from './CardList';

const ChatListName = styled.h3`

`;


const ChatList2 = () => {
    return (
        <div>
            <ChatListName>최근 참여한 채팅방</ChatListName>
            <div>
                <CardList SortOption="RecentSort"></CardList>
            </div>
        </div>
    );
};

export default ChatList2;