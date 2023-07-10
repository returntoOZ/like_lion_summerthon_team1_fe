import React from 'react';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const UserImage = styled.img`
    
`;

const UserDiv = styled.div`
    
`;

const UserName = styled.h3`
    
`;

const LogoutButton = styled.button`
    

`;

const MyHeader = () => {
    return (
        <div>
            <UserImage></UserImage>
            <UserDiv>
                <UserName></UserName>
                <LogoutButton></LogoutButton>
            </UserDiv>
        </div>
    );
};

export default MyHeader;