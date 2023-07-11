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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
