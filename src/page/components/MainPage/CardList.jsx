import React from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';

const EachChatLink = styled.img`
    width: 150px;
    height: 100px;
`;

const EachChatRank = styled.p`
    
`;

function handleArray(){
    sortedItems.sort((a, b)=>{
        if(props.SortOption==="MostSearched"){
            return a.searched - b.searched
        }
        else if(props.SortOption==="MostJoin"){
            return a.join-b.join;
        }
        else if(props.SortOption==="MostPopular"){
            return a.view-b.view;
        }
        return 0;
    })
}

const CardList = (props) => {
    const sortedItems = props.DataOption===undefined?<p></p>:props.DataOption;

    const [handledArray, setArray]=useState(props.DataOption===undefined?[]:props.DataOption);
    
    console.log(sortedItems);

    return (
        <div>
            {props.DataOption===undefined?<p></p>:
                sortedItems.map((eachData)=>(
                    <div>
                        <EachChatLink src={eachData.chatImage}></EachChatLink>
                        <EachChatRank></EachChatRank>
                    </div>
                ))
            }
        </div>
    );
};

export default CardList;