import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardList from './CardList';

const ChatListName = styled.h3`

`;

const HandleChange = styled.select`
    
`;

const ChatList1 = (props) => {
    const [sort, setSort] = useState("MostSearched");
    return (
        <div>
            <ChatListName>인기 채팅방</ChatListName>
            <div>
                <HandleChange 
                    onChange={(e)=>{
                        setSort(e.target.value);
                    }}>
                    <option value="MostSearched">최다 검색 순</option>
                    <option value="MostJoin">최다 참여 순</option>
                    <option value="MostPopular">인기순</option>
                </HandleChange>
            </div>
            <div>
                <CardList SortOption={sort} DataOption={props.TestData}></CardList>
            </div>
        </div>
    );
};

export default ChatList1;