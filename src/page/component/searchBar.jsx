import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // 검색어를 저장하기 위한 useState
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장하기 위한 useState

  const handleInputChange = (e) => { // 검색어를 저장하는 함수
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => { 
    e.preventDefault();
    const results = searchData(query);
    setSearchResults(results);
    if (typeof onSearch === "function") {
        onSearch(results);
    }
  };

  const searchData = (query) => { // query에 담긴 용어 기준으로 검색한 결과 리턴

    const data = [ // search 할 예시 데이터, 추후에 api 연동하면서 수정할 것
      { id: 1, name: "악귀" },
      { id: 2, name: "킹더랜드" },
      { id: 3, name: "하트시그널 4" },
      { id: 4, name: "환승연애2" },
      { id: 5, name: "마당이 있는 집" },
      { id: 6, name: "이번 생도 잘 부탁해" },
      { id: 7, name: "이로운 사기" },
      { id: 8, name: "바나나" },
      { id: 9, name: "오렌지" },
      { id : 10, name: "악귀" }
    ];

    const results = data.filter((item) => // filter로 true인 요소들만 results에 저장
      item.name.includes(query) // item.name이 query의 내용을 포함하고 있는지 true/false로 리턴
    );

    return results;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* 검색어 입력창 */}
      <input type="text" value={query} onChange={handleInputChange} placeholder="Search..."/> 
      
      {/* 검색어 입력창 */}
      <button type="submit">검색</button>
      
      {/* 검색 결과 표시 */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>

    </form>
  );
};

export default SearchBar;
