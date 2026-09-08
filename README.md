# 김동찬 개인 홈페이지 & 포트폴리오 (Dongchan Kim's Portfolio)

김동찬 님의 개인 포트폴리오 및 홈페이지 레포지토리입니다.  
GitHub Pages(`https://dttchan411.github.io`)를 통해 바로 웹상에 호스팅할 수 있도록 제작되었습니다.

---

## 🌟 주요 특징

- **반응형 디자인 (Responsive Design)**: PC, 태블릿, 모바일 등 모든 화면 크기에 최적화
- **다크 모드 & 라이트 모드 (Dark/Light Mode)**: 상단 테마 버튼을 통해 즉시 전환 가능 (설정 자동 저장)
- **모던한 UI/UX**: Tailwind CSS, Pretendard 폰트, Lucide Icons 및 부드러운 스크롤 애니메이션
- **가벼운 스택**: 별도의 빌드 단계 없이 HTML, CSS, JavaScript만으로 즉시 작동

---

## 📂 파일 구성

- `index.html`: 웹페이지의 전체 마크업 및 콘텐츠
- `styles.css`: 폰트, 글래스모피즘, 배경 그라디언트, 커스텀 스크롤바 등 디자인 스타일
- `script.js`: 다크모드 전환, 모바일 메뉴 토글, 스크롤 애니메이션, 이메일 복사 기능 등

---

## 🚀 GitHub Pages 배포 방법

1. 변경사항을 `main` 브랜치에 커밋 및 푸시합니다:
   ```bash
   git add .
   git commit -m "Update portfolio website"
   git push origin main
   ```
2. GitHub 저장소의 **Settings** > **Pages** 로 이동합니다.
3. **Build and deployment** 항목의 **Source**를 `Deploy from a branch`로 설정하고 `main` 브랜치 `/ (root)`를 선택 후 **Save**합니다.
4. 잠시 후 `https://dttchan411.github.io`에서 사이트가 라이브로 공개됩니다!

---

## ✏️ 나만의 정보로 수정하는 방법

`index.html` 파일을 열어 다음 부분을 본인의 정보에 맞게 변경하세요:
- **이메일 주소**: `doungchan@example.com` 검색 후 실제 이메일로 변경 (`data-email` 및 `mailto:` 링크)
- **프로젝트 목록**: `<section id="projects">` 섹션에서 프로젝트 이름, 설명, 태그, 링크 수정
- **기술 스택**: `<section id="skills">` 섹션에서 보유한 기술 스택 태그 수정
- **소개글 및 경력**: `<section id="about">` 및 `<section id="experience">` 내용 수정
