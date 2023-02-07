import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 먼저 public의 manifest.json을 살펴본다.(앱설정파일)
  // 그리고 service-worker.js를 생성.
  // (인덱스의 serviceWorkerRegistration.unregister();를
  // register()로 바꿔주면 생성됨.)
  // (기존의 service-worker.js파일은 설정파일일 뿐,
  // 실제 파일은 위 방식으로 생성 후, 빌드할 때 생김)

  // 빌드 후에 생성되는 asset-manifest.json 파일은 캐싱할 파일 목록들.
  // (캐싱: 오프라인 상태에서도 가져올 수 있는 저장된 파일)
  // 특정 파일은 캐싱되지않게 하는 법
  // node_modules/react-scripts/config/webpack.config.js에서
  // Injectmanifest 부분에서
  // include의 []에 /파일명\.확장자명/ 을 추가해준다.(잘 안씀)

  // 완성된 것을 확인하는 법 :
  // 1. 빌드된 것을 github등에 호스팅하거나,
  // 2. 빌드된 것을 VScode로 오픈해, index.html을 미리보기 띄우기

  // 확인상태에서 개발자도구를 열어 Application탭을 열면,
  // service-worker, manifest 등을 확인 할 수 있다.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
