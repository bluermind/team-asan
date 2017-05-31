# Node.js 정리 - KCS 

##1.Node.js 란?

### 구글 크롬의 자바스크립트 엔진으로 만들어진 서버사이드 플랫폼. 
### NON_BLOKCING을 위해 콜백함수 사용 - > 비동기식 

##Node.js 특징 

### 1.비동기 I/O처리, 이벤트위주: 데이터가 반환할떄까지 기다리지않고 다음 API 실행. 
###                               이전 API값 결과반환시. Node.js가 이벤트알림 메커니즘 이용
### 2.빠른속도 : 자바의 V8엔진
### 3.단일 스레드, 확장성 : 쓰레드 1개만 사용. 이벤트메커니즘을 통해 서버가 멈추지않아 확장성 증가
### 4.노버퍼링 : 버퍼링이 없으며 데터를 CHUNK로 출력.


#ORM 이란?
## OOP 언어와 RDBMS의 시스템을 매핑하여 데이터를 다루는 OOP를 쉽개해줌. 

###1. 특정 DBMS에 종속되지 않는다.
###2. SQL문이 코드에 들어가지 않는다.
###3. 중첩 데이터를 바인딩해줌.

##단점
### 퍼포먼스가 느림, 튜닝이어려움


#Sequelize ?
## Node.js 의 ORM으로 Promise기반으로 동작. 

## Promise 란? 
### 비동기 작업방식을 약속하는것.  Pending , fulfilled ,rejectd 상태 존재.

#MVC 패턴 

## Model - View - Controller 역할을 나누어 개발하는 디자인 패턴.
### Model : 객체 데이터, DB쿼리를 통한 데이터

