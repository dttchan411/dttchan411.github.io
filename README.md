# Dongchan Kim · Beyond the Surface

김동찬의 시스템 프로그래밍 포트폴리오입니다.

**사이트:** https://dttchan411.github.io/

## 디자인과 기능

- 깊은 남색과 은백색을 사용한 반응형 디자인
- 직접 제작한 SVG 궤도와 입체 구조물 배경
- 첫 화면에서 스크롤에 따라 배경을 확대하는 연출
- 움직임 끄기/켜기 버튼 및 브라우저의 동작 줄이기 설정 지원
- 모바일 메뉴, 키보드 탐색, 본문 바로가기
- About, Selected work, Now와 GitHub 연락 링크

외부 이미지·영상 생성 서비스나 실행용 JavaScript 라이브러리는 필요하지 않습니다. 글꼴은 Google Fonts에서 불러오며, 연결이 안 되면 기기의 기본 글꼴을 사용합니다. 소개 글과 프로젝트 설명은 index.html에서 수정할 수 있습니다.

## 파일

| 파일 | 역할 |
| --- | --- |
| index.html | 소개, 프로젝트, 메뉴와 메타 정보 |
| styles.css | PC·모바일 디자인 및 동작 줄이기 대응 |
| script.js | 스크롤 연출, 움직임 설정, 모바일 메뉴 |
| assets/monolith.svg | 첫 화면의 벡터 일러스트 |
| assets/favicon.svg | 브라우저 탭 아이콘 |

assets/hero-workspace.png는 이전 디자인의 원본 이미지로 보관합니다.

## 실행과 배포

별도의 빌드 과정 없이 정적 파일로 실행합니다. 로컬 확인 명령:

    python -m http.server 8765 --bind 127.0.0.1

GitHub Pages는 main 브랜치의 루트 폴더를 게시합니다. 반영 전에는 작은 모바일 화면, 메뉴 링크, 움직임 전환, 개발자 콘솔 오류를 확인합니다.

비밀 키나 인증 파일은 저장소에 올리지 않습니다. .env, credentials.json, token.json은 .gitignore에 등록되어 있습니다.
