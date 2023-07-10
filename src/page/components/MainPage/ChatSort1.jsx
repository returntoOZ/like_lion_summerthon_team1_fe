import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardList from './CardList';

const ChatList1Container = styled.div`
    border-radius: 20px;
    border: none;
    background: rgba(165, 215, 244, 0.39);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    margin:  0 2rem 2rem 2rem;
`;

const ChatListName = styled.h3`
    margin: 0px;
    padding: 1rem 0 1rem 1rem;
    font-size: 1.5rem;
`;

// const HandleChange = styled.select`
    
// `;

const ChatList1 = (props) => {
    // const [sort, setSort] = useState("MostSearched");
    return (
        <ChatList1Container>
            <ChatListName>인기 채팅방</ChatListName>
            {/* <div>
                <HandleChange 
                    onChange={(e)=>{
                        setSort(e.target.value);
                    }}>
                    <option value="MostSearched">최다 검색 순</option>
                    <option value="MostJoin">최다 참여 순</option>
                    <option value="MostPopular">인기순</option>
                </HandleChange>
            </div> */}
            <CardList IdOfUser={props.IdOfUser} SortOption="MostPopular" DataOption={props.TestData}></CardList>
            
        </ChatList1Container>
    );
};

export default ChatList1;