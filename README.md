# 수정사항 정리 + 생각할 것들

1. router 관련 오류 해결(일단은 연결 완료)
    리액트에서 쿠키 관리하는 방법 찾으면 다시 app.js 링크 수정해야 함
    필요한 코드 3줄은 LoginPage.jsx에 적어놓았음 import 밑

2. 채팅방 개설 페이지 axios 연결
    예원님 개발 페이지와 합침
    로그인 관련 오류(쿠키 관리 x)로 인해 채팅방 개설은 되나
    enter가 불가능함 -> 추후 해결해야 함

3. 메인페이지 axios 연결 완료
    채팅방 정렬 여부 다시한번 확인하기

# 해야 할 것들(css 제외)

1. 로그인, 로그아웃 구현 (쿠키 관리)
    -> app.js 수정
    -> 채팅방 enter(권한이 있을 것이므로 swagger처럼 오류 없이 가능할듯)

2. 채팅방 개설

3. 채팅방 입장 + 채팅 전송 + 채팅방 퇴장

4. 채팅방 삭제

5. 검색 페이지 자동완성/검색결과 둘 중 하나만 나오게 해결


# 추가기능 (아직 백, 프론트 다 구현 x)

1. 채팅방 이미지
    -> 메인 페이지에서 순위 보이게 할때 채팅방 이미지가 뜨면 디자인적으로 좋을 것 같아서
    -> 필수 구현 사항은 아니므로 여유가 되면 추가

2. 채팅방 개설 시 해시태그 추가