# UI Framwork
NSmall Mobile version는 정적 파일 생성(SSG) 방식의 UI프레임워크 입니다.

## 구성
[Node.js](https://nodejs.org/)와 
[Express](http://expressjs.com) 를 기반의 웹 서버로 구성되어 있고, 
[ejs](https://github.com/mde/ejs) 뷰 템플릿 엔진을 이용하여 HTML을 다룹니다.  
CSS는 [Sass(SCSS)](https://sass-lang.com/) 전처리 도구를 이용하며,
벤더 프리픽스를 자동화를 위해 
[Autoprefixer](https://github.com/postcss/autoprefixer)가 사용됩니다.

빌드 도구는 [Gulp](http://gulpjs.com/)를 이용합니다. 빌드 과정에서 
[HTMLHint](https://github.com/yaniswang/HTMLHint), 
[Sass-lint](https://github.com/sasstools/sass-lint), 
[ESLint](https://eslint.org/) 등의 코드 린터를 사용하여  
코드 품질을 검증합니다.

## 사용 방법

```bash
$ npm install # 디펜던시 인스톨
$ npm start #개발모드 웹 서버 실행
$ npm run build # 프로덕션 빌드
```



## Directory Structure
* **data** - Contents(Mock Data)
    * images - 콘텐츠 이미지
    * texts - 독립 페이지에 사용되는 텍스트 데이터
* **node_moddules** - 웹서버에 사용되는 모듈
* **dist** - src로부터 자동 빌드된 파일들
    * data
        * images - image 파일
        * texts - json 파일
    * images - UI image 파일
    * scripts - 자바스크립트 파일
    * styles - css 파일
    * views - html 파일 
* **src** - 소스 파일
    * images - UI 이미지
    * scripts - 자바스크립트 프레임워크 및 플러그인, 소스
    * styles - CSS Preprocessor(SCSS) 소스
    * views - 뷰 소스(ejs)
 
