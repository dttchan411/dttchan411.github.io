# 김동찬 개인 홈페이지

사이트: https://dttchan411.github.io/

소유자가 제공한 이름, 학교, 학부, 전화번호, 이메일을 소개하는 정적 홈페이지입니다. 임의로 만든 프로젝트나 경력, 관심사, 학습 현황은 기재하지 않습니다.

- index.html: 소개, 학교, 연락처와 검색 메타 정보
- styles.css: 남색·은백색 디자인 및 모바일 화면
- script.js: 스크롤 확대 효과, 움직임 전환, 모바일 메뉴
- assets/monolith.svg: 직접 제작한 첫 화면 일러스트
- assets/koreatech-campus.jpg: 학교 소개 배경 사진

## 자료 출처

학교 설명: https://www.koreatech.ac.kr/menu.es?mid=b10101000000

학교 사진: Wodndb, 한국기술교육대학교 다산정보관 (2015년 4월), 2015-04-11.
원본: https://commons.wikimedia.org/wiki/File:한국기술교육대학교_다산정보관_(2015년_4월).JPG
라이선스: CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/
원본 사진 파일은 변경하지 않았습니다. 웹 화면에서는 표시 영역을 조정하고 별도 반투명 레이어를 겹칩니다. 사진과 해당 사진에 대한 파생 표현에는 동일한 CC BY-SA 4.0이 적용됩니다.

## 확인 및 게시

로컬 확인: python -m http.server 8765 --bind 127.0.0.1

main 브랜치의 루트 폴더를 GitHub Pages로 게시합니다. 게시 전에 모바일 줄바꿈, 메뉴 링크, 전화·메일 링크의 값, 이미지 로딩과 실행 오류를 확인합니다.

비밀 키와 인증 파일은 게시하지 않습니다. .env, credentials.json, token.json은 .gitignore에서 제외합니다.
