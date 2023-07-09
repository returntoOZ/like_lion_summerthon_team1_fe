import React from 'react';
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

//css추가 필요

const EveryChatBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const EachChatBox = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 1.5rem;
`;

const EachChatLink = styled.img`
    width: 8rem;
    height: 5.5rem;
    border-radius: 1.25rem;
`;

const EachChatRank = styled.p`
    margin: 0px;
    color: #FFF;
    /* text-align: center; */
    text-shadow: 2px 1px 1px gray;
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 600;
    /*
    position 속성을 통해 문서 상에 요소를 배치하는 방법을 지정한다.
    top, right, bottom, left 속성을 통해 요소의 최종 위치를 결정한다.
    */
    position: absolute;
    /* z-index: 1; */
    top: -2.5rem;
    left: -0.7rem;
`;

const CardList = (props) => {//cardList -> 각 채팅방 카드 sorting/ map으로 띄우기
    const sortedItems = props.DataOption===undefined?console.log(props):props.DataOption;
    //props undefined 예외처리, 정렬할 배열 sortedItems 선언 및 초기화

    let rankCount = 0;
    useEffect(()=>{
        if(props.DataOption===undefined){//undefined 예외처리
            console.log('DataOption===undefined!');
        }
        else{
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
        });
        console.log(sortedItems);
    }
    },[props.SortOption])//Sort 기준이 바뀔 때마다 실행

    return (
        <EveryChatBox>
            {props.DataOption===undefined?<p></p>:
                sortedItems.map((eachData)=>(//map으로 정렬된 데이터 정렬
                //div에 onClink={()=>navigate(route 링크)}로 각 채팅방에 들어갈 수 있도록 수정 필요
                    <EachChatBox>
                        <EachChatRank>{++rankCount}</EachChatRank>
                        <EachChatLink src={eachData.chatImage}></EachChatLink>
                    </EachChatBox>
                ))
            }
        </EveryChatBox>
    );
};

export default CardList;