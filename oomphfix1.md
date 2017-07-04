# 이클립스 Oomph #
---

* 프로젝트에 사용되어지는 프로젝트 구성요소, 인스턴스의 설치와 구성을 더 쉽게하기 위한 도구를 제공해준다.  
* 개인 설정 기록, 원본체크아웃 환경설정을 통해 전체 개발 환경을 쉽게 설정할 수 있습니다. 
### => 실제로 편리한 것인지 Setup 파일의 분석이 필요하다. (자료조사가 부족한 상태)


## oomph 설정
* 이 설정을 통해서 프로젝트에 쉽게 참여가능하고 쉽게 구성하도록 하기위한다.
* Oomph 설치시 Bundle pool은  플러그인과 기능을 저장하는 장소
* 이클립스 설치시 생성된 플러그인 & 기능이 저장되어져 있다.
* 이클립스 Install New Software에서 Oomph 업데이트 & 플러그인 설치 가능하다.

### link : <http://download.eclipse.org/oomph/updates>

---

* File – other 통해 Oomph 폴더에서 생성할 모델 선택
* 개발환경을 설정해둔 프로젝트를 setup모델로 생성

 ![setup모델](http://postfiles16.naver.net/MjAxNzA3MDNfMjIg/MDAxNDk5MDY0Njk5NTE4.To3GnxKGxms8O2xx-woRg8q11SjNy3WuCnpca6UIMGYg.ZVw3F2mBL4apeXnDZFzSvOEjfk-GJfxxTOYPnTRPAPYg.PNG.ycy122/oomph1.png?type=w2)  


생성된 모델은 기본적인 파일이 생성

---
### 생성된 Setup 파일

![create setup](http://postfiles2.naver.net/MjAxNzA3MDNfMTgg/MDAxNDk5MDY0Njk5Njk3.IC9gNLBSR_ceXFfgzl4WbiqE2DfkZ8tAeVO86BqFyYAg.Ue9szdA_PbeXygwjQO8TUteR46ioixXdpSgrBoiiDJsg.PNG.ycy122/oomph2.png?type=w2)

![Alt text](http://postfiles2.naver.net/MjAxNzA3MDNfNjUg/MDAxNDk5MDY0Njk5ODU2.sI69nsaikXsON0Qzybv85THrU9KEULjNhDim3NRhT9Ig.6wKAk7ebS0N0XHE796HqyMpY-nFb76sj6HCOhrxTvBcg.PNG.ycy122/oomph3.png?type=w2)


* JRE 버전에 따른 위치를 지정 
* oomph 사용자의 JRE 위치를 지정	
* Eclipse Ini : 초기의 JVM의 힙메모리 크기를 지정
* P2 저장소 : Oomph 설정파일을 설치하려는 P2저장소의 위치를 지정 
* Oomph 업데이트 사이트위치 식별하는데 도울 수 있다.
* 이클립스 소프트웨어 저장소로 이클립스에서 저장소의 자료를 호출하여 사용가능합니다.
ith Table support) and GitHub Flavored Markdown.

---
###참조 페이지

<http://codeandme.blogspot.kr/p/oomph-articles.html>

<https://wiki.eclipse.org/Eclipse_Oomph_Authoring#Using_the_Setup_Editor>


<https://www.bsi-software.com/en/scout-blog/article/oomph-changes-the-way-you-handle-multiple-eclipse-installations.html>

<https://jaxenter.de/eclipse-oomph-bringt-schwung-ins-projekt-12977>
