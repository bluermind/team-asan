# Loopback
 오픈소스 NodeJS 프레임워크
 독립적으로 또는 연동되어 동작할 수 있는 다양한 NodeJS로 구현된 모듈조합이다.
 String Remoting 모듈을 통해 클라이언트는 LoopBack 의 API 를 직접적으로 호출 할 수 있다.

 - Strong Remoting
  			REST 나 WebSocket, 혹은 기타 여러 전송방법을 이용하여 
 			 Backend API 를 제공하는 것을 가능하게 하는 전송계층

> ## 특징
- 별도의 많은 코딩 없이 동적으로 End-to-End REST API 를 생성한다.
- 복잡한 API 의 모델관계와 접근 제어를 통합한다.
- 모바일 어플리케이션을 위한 위치정보, 파일 관리, Push 서비스를 제공
- 생성된 어플리케이션을 클라우드 환경 / 설치형 환경, 어디서든 구동 가능하다.

> ## 호출방식
- 로컬 → Node.js 형태로 호출
- 원격 → REST API 를 통해 호출

> ## Loopback 프레임워크 모듈들
>> - ### 모델
>> 		모델과 API 서버
>> 		데이터가 저장되는 방식에 대한 걱정없이 동적으로 빠르게 모델생성, API 를 도출
>> 		 모듈 : loopback

>>      Loopback의 핵심, 데이터베이스 같은 Back-end 데이터 소스, (REST, SOAP) 와 같은 Back-end 서비스들을 표현한다.
>>      Node 와 REST API 양쪽 모두에서 사용 가능한 자바스크립트 객체이다.


>>>    #### 내장 모델
>>>    모든 LoopBack 어플리케이션은 Uesr, Role, Application 과 같은 공통적인 모델을 
>>>    미리 정의하여 내장 모델로 가지고 있다.

>>>    #### 사용자 정의 모델
>>>    내 어플리케이션을 위한 특정 사용자 정의 모델들을 정의할 수 있다.
>>>    다른 내장모델의 이미 정의된 기능을 포함할 수 있도록, 내장모델을 상속받는 사용자 정의 모델도 만들 수 있다.

>> - ### 추상화
>> 		물리적인 데이터와 연결되는 모델 데이터의 추상화
>>		 서비스에 연결하고 물리적으로 저장되는 방식과 상관없이 CRUD 기능을 갖는 추상화된 모델 제공
>>		  모듈 : loopback-datasource-juggler 

>> - ### 초기화
>> 		어플리케이션 초기화
>> 		데이터 소스 및 모델 설정, 모델을 데이터 소스에 연동시켜주며 어플리케이션 설정 및 
>> 		커스텀 boot 스크립트를 실행한다.
>> 		 모듈 : loopback-boot

>> - ### 시퀀스
>> 		미들웨어 실행
>> 		어플리케이션이 실행되고 있을 때 다양한 위치에서 수행될 미들웨어를 설정한다.
>> 		 모듈 : loopback-phase

>> - ### 데이터
>> 		RDBMS 와 NoSQL 데이터 소스
>> 		RDBMS, NoSQL 데이터 소스와 연결해주고, 관련된 추상화 모듈을 제공한다.
>>		 모듈 : loopback-connector-(mongodb / mysql / postgresql …)

>> - ### 통합
>> 		시스템 연결
>> 		표준 웹 인터페이스 API 를 갖는 시스템을 연결해준다.
>> 		 모듈 : loopback-connector-rest, loopback-connector-soap

>> - ### 툴
>> 		CLI 와 그래픽 툴
>> 		Yeoman 기반의 slc loopback 명령어. (StrongLoop Arc 그래픽 툴)
>> 		 모듈 : generator-loopback, strong-arc

>> - ### 서비스
>> 		사전 구축된 서비스들
>> 		일반적인 사용사례에 대한 사전구축된 서비스 구성요소, 
>> 		Loopback 어플리케이션 내에 컴포넌트로 포함하여 통합 가능
>>		  모듈 : loopback-component-(push / storage / passport / sync(개발 중))

>> - ### 게이트웨이
>> 		API 게이트웨이
>> 		API 의 보안을 높이고, 호출 및 응답에 대한 서비스 측면의 품질을 제공한다.
>> 		 모듈 : loopback-gateway, loopback-component-oauth2

>> - ### 클라이언트
>> 		클라이언트 SDK
>> 		클라이언트 개발 시 사용할 수 있는 Loopbakc API 와 
>> 		연동하는 native 플랫폼별(iOS, Android, AngularJS) SDK 제공
>> 		 모듈 : loopback-sdk-(ios / android / angularJS)

> ## 어플리케이션 로직
> Loopback 에서는 여러가지 방법으로 사용자 정의 어플리케이션 로직을 추가할 수 있다.
>> ### 로직 추가
>> - 사용자 정의 REST endpoint인 원격 메소드(remote method),
>> Remote method에 의해 트리거 되는 원격 hooks(remote hooks),
>> 모델 CRUD 메소드에 의해 트리거 되는 연산 hooks(operation hooks)
>> 을 이용하여 모델에 어플리케이션 로직 추가


>> - 어플리케이션이 시작할 때 수행되어지는 boot 스크립트에 추가
>> - 사용자 정의 미들웨어 정의(Express 미들웨어와 유사)
>> 모델과 Back-end 데이터 저장소에 저장되기 전에 데이터 유효성 검사 코드를 추가할 수 있다.

> ## 미들웨어
> HTTP 요청이 REST endpoint에 만들어질 때 수행되는 함수
> LoopBack 에서는 Express 와는 다르게 미들웨어가 호출되는 순서를 명확하게 정의할 수 있게 '단계' 개념 추가

> ## LoopBack 컴포넌트
> LoopBack 은 '플러그인' 방식으로 아래의 추가 컴포넌트들을 제공한다.
>> - Push notifications - 모바일 단말 상에서 badge, alert 또는 팝업 메시지 방법으로 즉시 표시를 위해 모바일 앱에
>> 정보를 전송할 수 있게 도와준다.
>> 
>> - Storage service - 서버의 파일 시스템뿐만 아니라 클라우드 스토리지 공급자(Amazon, Rackspace, OpenStack 등)
>> 로부터 파일을 업로드/다운로드 할 수 있게 도와준다.
>> 
>> - Third-party 로그인 - Passport를 이용하여 페이스북, 구글, 트위터, Github 또는
>> OAuth / OAuth2 / OpenID 기반의 시스템들로부터 third-party 인증을 사용하여 로그인 또는 계정 연결을 할 수 있게 도와준다.
>> 
>> - 동기화 - 오프라인에서 모바일 어플리케이션들이 수행할 수 있게 도와주고, 
>> 서버와 재연결되었을 때 데이터를 동기화할 수 있게 도와준다.
>> 
>> - OAuth 2.0 - LoopBack 어플리케이션이 클라이언트 어플리케이션과 사용자가 보호된 API endpoint 에 접근 시
>> 인증 및 권한 체크를 위한 OAuth 2.0 공급자의 기능을 제공할 수 있게 도와준다.

> ## 개발 도구
> Loopback 은 2가지 개발 도구를 제공해준다.
>> - slc loopback - Loopback 어플리케이션을 생성과 수정하기 위한 명령어 방식(command line)의 도구이다.
>> - StrongLoop Arc - LoopBack 어플리케이션을 개발, 배포, 모니터링하기 위한 그래픽 방식의 도구이다.


























