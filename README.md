# 해외 사이트 audio-pro 웹 사이트 클론코딩 

  <img alt="logo" src="https://github.com/jjub0217/jjub0217.github.io/assets/62126380/c6d30a06-42b2-4d44-ba61-3f112c49e557" width=80>


----
이 프로젝트는 해외 사이트 audio-pro 웹 사이트 클론코딩 한 페이지입니다. <br>
2023.09.07 ~ 2023.10.28 두달간 페이지 를 제작, 수정 및 배포하였습니다. <br>

## 프로젝트 기능
1. 반응형 웹 페이지.
2. 사이트가 열리기까지 로딩을 카운트다운으로 보인다.
3. 스크롤을 위아래로 올림에 따라 고정된 영역 내에서 이미지가 움직인다.  
4. 스크롤을 위아래로 올림에 따라 텍스트가 살짝씩 스크롤에 따라 위아래로 움직인다.
5. 메뉴가 아래로 펼쳐졌다 접힌다.
6. 마우스포인터가 OS의 기본 마우스포인터가 아니라 커스텀 마우스포인터로 보인다.
7. 특정 요소에 마우스포인터를 갖다 대면 마우스포인터가 커진다.
8. 마우스포인터 안보임


## 콘솔에러 0 <br>
<img src="https://github.com/user-attachments/assets/e88c30d5-d6b4-4259-9293-f8f589237fd7" width=800> <br>

## 프로젝트 웹표준(W3C의 Markup Validation Service)
결과 : 0개 <br>
<img src="https://github.com/jjub0217/jjub0217.github.io/assets/62126380/d46e6408-480b-4baf-ab9a-47b87c150ef7" width=800> <br>


## 프로젝트 웹접근성
- chrome Lighthouse 결과 :<br>
모바일 디바이스의 접근성 표준을 준수하였는지 로컬에서 검사할수 있는 goole 의 lighthouse 로 검사하면 개선할점이 Accessibility  항목과 Best Practices 항목에서 나타납니다.  <br>
[1] 데스크탑
<img src="https://github.com/user-attachments/assets/834029c4-9c4a-4f4d-a030-b5a7b9398e33" width=800> <br>
[2] 모바일
<img src="https://github.com/user-attachments/assets/917e1810-9054-4cd9-830a-0568e11c2918" width=800> <br>
- Open-WAX 결과 : error 0<br>
<img src="https://github.com/jjub0217/jjub0217.github.io/assets/62126380/2a1b47af-ad13-431d-8ad4-0a6b4cefb43a" width=800> <br>
- WAVE 결과: error 0<br>
<img src="https://github.com/user-attachments/assets/7eec7296-2a26-4305-a47b-5aafb5bb8238" width=800>


## 모바일 디바이스 검수
- 안드로이드 Note20 울트라
<video src="https://github.com/user-attachments/assets/de3049e3-fc78-4a19-8cec-118e4831c8af" autoplay muted playsinline loop></video>
- 아이폰 SE2 
<video src="https://github.com/user-attachments/assets/8e51b1c2-d0ed-46b6-9ba3-a14e06654cf0" autoplay muted playsinline loop></video>
- 아이패드 6
<video src="https://github.com/user-attachments/assets/e9a347a3-7d69-4dbe-8143-9623e5763f88
" autoplay muted playsinline loop></video>


## 기술 스택
![HTML5](https://img.shields.io/badge/HTML5-FE642E?style=flat-square&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-2E9AFE?style=flat-square&logo=CSS3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-cc6699?style=flat-square&logo=sass&logoColor=white)
![Javascript](https://img.shields.io/badge/Javascript-gray?style=flat-square&logo=Javascript&logoColor=f7df1e)
![jQuery](https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jQuery&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-gray?style=flat-square&logo=Swiper&logoColor=0080FF)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=GreenSock&logoColor=white)


## 포함된 자바스크립트 라이브러리
| Name      | License                          | Copyright                                 |
| --------- | -------------------------------- | ----------------------------------------- |
| Swiper.js | MIT License                      | 2019 Vladimir Kharlampidi                 |
| jQuery    | MIT License                      | OpenJS Foundation and jQuery contributors |
| GSAP      | Standard License, Club GreenSock | 3.12.2ver 2023 GreenSock LLC              |

## 개선점
- 웹접근성을 더욱 지키기 위해 텍스트와 배경간의 명도 대비, 고대비 점수를 높이기
- 스크롤에 따라 이미지가 움직이는 기능을 canvas 를 사용하여 구현하였지만, Lottie를 사용하여 구현해보고 싶었다.(하지만 Lottie 는 디자이너분이 제공해주시는 파일이므로 현재로써는 구현불가.)
- 메인페이지가 완전히 로딩이 완료 되기까지 로딩페이지로 카운트다운을 시각적으로 보여주는 부분을 gsap 을 하용하여 구현하였지만, 가상서버를 생성하여, 서버에 있는 데이터들을 다 불러오는 동안에 시각적으로 보이는 카운트다운을 구현하고 싶었다. (서버가 없었으므로 구현불가.)
- 독일어로 되어있는 웹 사이트를 클론코딩하느라 텍스트는 전부 같은 독일어를 가져왔지만, 독일어가 아니라 국내 웹 사이트로 브랜드 교체를 하고 싶었다.

## 연락처
프로젝트에 관한 문의나 버그 리포트는 아래 이메일로 연락주세요.
이메일: devel.jjub@gmail.com

