import React, { useState } from "react";
import styled from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faSearch, faUser);

const SearchContainer = styled.div`
  display : flex;
  align-items : center;
  width: 400px;
  height: 45px;
  position: relative;
  border: 0;
  margin-left : 30px;
  margin-top : 10px;
`
const SearchForm = styled.form`
  width : 100%;
  height : 60%;
`
const Search = styled.input`
  border: 0;
  padding-left: 10px;
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  outline: none;
`;

const AutoSearchContainer = styled.div`
  z-index: 3;
  height: 50vh;
  width: 400px;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 2px solid;
  padding: 15px;
`;

const AutoSearchWrap = styled.ul`

`;

const AutoSearchData = styled.li`
  padding: 10px 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // 검색어를 저장하기 위한 useState
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장하기 위한 useState
  const [suggestions, setSuggestions] = useState([]); // 자동완성 결과를 출력하기 위한 useState

  const handleInputChange = (e) => { // 검색어를 저장하는 함수
    const {value} = e.target;
    setQuery(value);
    const suggestions  = getSuggestions(value);
    setSuggestions(suggestions);
  };

  const handleSelectSuggestion = (suggestion) => { // 중간 검색 키워드를 저장하는 함수
    setQuery(suggestion);
    setSuggestions([]);
  };

  const handleFormSubmit = (e) => { 
    e.preventDefault(); // 폼의 기본동작인 새로고침 방지
    const results = searchData(query); // 검색 결과 리턴
    setSearchResults(results); // 검색 결과 업데이트
    if (typeof onSearch === "function") { // onSearch prop이 유효한 함수인지 확인
        onSearch(results);
    }
  };

  const data = [ // search 할 예시 데이터, 추후에 api 연동하면서 수정할 것
  { id: 1, name: "악귀" },
  { id: 2, name: "킹더랜드" },
  { id: 3, name: "하트시그널 4" },
  { id: 4, name: "환승연애2" },
  { id: 5, name: "마당이 있는 집" },
  { id: 6, name: "이번 생도 잘 부탁해" },
  { id: 7, name: "이로운 사기" },
  { id: 8, name: "도깨비" },
  { id: 9, name: "이상한 이야기1" },
  { id : 10, name: "환승연애1" },
  { id : 11, name: "하트시그널 3" },
  { id : 12, name: "하트시그널 2" }
];

  const getSuggestions = (value) => {
    // 검색어 자동 완성 결과를 가져오는 로직을 구현합니다.
    // 예시: 데이터는 배열 형태로 가정하고, 배열 요소 중에 입력된 검색어를 포함하는 항목들을 추출하여 반환합니다.

    const filteredSuggestions = data.filter((item) =>
      item.name.includes(value)
    );
    return filteredSuggestions;
  };

  const searchData = (query) => { // query에 담긴 용어 기준으로 검색한 결과 리턴

    const results = data.filter((item) => // filter로 true인 요소들만 results에 저장
      item.name.includes(query) // item.name이 query의 내용을 포함하고 있는지 true/false로 리턴
    );

    return results;
  };

  return (
    <>
      <SearchContainer>
        <SearchForm onSubmit={handleFormSubmit}>
          <Search type="text" value={query} onChange={handleInputChange} placeholder="Search..."></Search>
          

          {query.length > 0 && suggestions && (
            <AutoSearchContainer>
              <AutoSearchWrap>
                {suggestions.map((suggestion) => (
                  <AutoSearchData key={suggestion.id} 
                  onClick={() => handleSelectSuggestion(suggestion)}
                  >
                  <a href="#">{suggestion.name}</a>
                </AutoSearchData>
                ))}
              </AutoSearchWrap>
            </AutoSearchContainer>
          )}


          <ul>
            {/* 검색 결과창 */}
          {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
          ))}

          </ul>

        </SearchForm>
      </SearchContainer>
    </>
  );
};

export default SearchBar;


