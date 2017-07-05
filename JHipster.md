#JHipster 란?
> *매우 빠르고 간단하게, Spring boot와 angular 어플리케이션을 생성할 수 있는 프로젝트*
> *frontend 영역과 server-side 영역의 프로젝트를 한꺼번에 생성*

## Jhipster가 지원하는 영역
- client side options : Html, css, bootstrap, angular JS, Jquery, bower, gulp, sass등등
- server sidee optioos : Spring boot, Spring securitym, gradle, maven, hibernate, Mysql, postgreSQL, oracl,MongoDB, cassandra, gatling, cucumber 



##Microservice 구성 요소
- JHipster 레지스트리 : 마이크로 서비스 아키텍처의 필수요소, 다른 모든 구성요소를 서로 연결하고 서로 통신할 수 있게 함

- Microservice 응용프로그램 : 백엔드 코드 들어있고, 실행되면, 도메인에 대한 API를 노출한다., 여러 마이크로서비스 응용프로그램 으로 구성 될 수 있으며 응용프로그램에 몇 개의 엔티티와 비즈니스 규칙이 포함된다.

- 게이트웨이 : 모든 프론트 엔드 코드를 가지고 있으며 전체 마이크로 서비스 응용프로그램 그룹에서 생성한 API 를 사용한다.
- 벡 엔드  : src/ main / java 폴더에 존재한다.
- 프런트 엔드 : src / main /webapp 폴더에 존재하고 대부분 Angular JS 모듈의 대부분을 포함한다.




##JHipster 설치 
#### 준비사항 및 유의사항
- Java, node.js가 먼저 설치
- git, client, maven or gradle, npm으로 gulp, bower등이 먼저 설치
- 주의사항 : bower를 미리 다운로드를 먼저 받아주어야 한다.
- java 8 설치 
- (옵션)maven이나 graddle 설치
- 따로 설치 안하도 JHipster가 자동으로 maven wrapper 혹은 gradle wrapper를 설치한다.  


#### 설치순서 
4. git 설치
4. node.js 설치
5. Install Yeoman: npm install -g yo
6. Install Bower: npm install -g bower
7. Install Gulp: npm install -g gulp
8. Install JHipster: npm install -g generator-jhipster

jhipster 이전 버전 설치 : npm install -g generator-jhipster@1.2.0

9. yo jhipster (jhipster 실행)



##JHipster 예제

#### Application 설치
	
	mkdir myapplication - 빈디렉토리 생성
	cd myapplication - 해당 디렉토리로 이동
	jhipster - 응용프로그램을 생성
	
	

######설치시작 및 응용프로그램 생성( 설치방법은 3가지 존재 (yarn 을 이용한 설치, npm을 이용한 설치, 방랑자설치) - npm을 이용해서 설치한다.

	1. cmd - npm install -g generator-jhipster  로 입력
	2. 어떤 서비스를 만들것인지 설정
	3. 어플리케이션 이름을 설정
	4. 자바기본 패키지 명 설정
	5. 권한을 어떤식으로 설정할 수 있는 선택(http session, Oauth2, token 방식중에서 선택
		-> session Login 하는 방식으로 선택
	
	6. 데이터베이스 설정(SQL : H2, MySQL, MariaDB, PostgreSQL,Oracle, MongDB, Cassandra,MongoDB, Cassandra)
	
	7. production(운영레벨)에서 DB를 선택 - Maria DB ???

	8. 개발레벨에서 사용할 DB를 선택 ( 개발 운영환경같은것에서 maria DB가 좋다고 하니 이것을 선택)

	9. hibernate의 세컨드 캐시를 설정할 부분 (싱글서버모드 ehcache, HazelCast)

	10. 자바백엔드 빌딩시스템 선택, Maven을 선택
	
	11. 추가설정, 소셜로그인, 검색엔진, 세션 클러스터링, 웹소켓등을 설정
	
	12. SaSS 를 이용해서 스타일시트를 생성할 것인지 선택 , 빌드하는 스크립트까지 자동으로 생성
	
	13. 다국어지원 설정 , 한국어도 지원
	
	14. 테스팅 프레임워크를 선택




	이제 프로젝트를 자신이 사용하는 IDE (Eclips, STS, Intelij 등) import한다. Maven Project로 import하면 된다.
		-> src/main/resourcr/application.config 에 datasource 부분을 application을 설정한 데이터베이스로설정을 맞춘다.
	 


	해당 폴더의 위치에서 .\mvnw 를 입력하면, 해당 배치파일이 시작된다. 
	
  데이터이스가 없는 마이크로 서비스 : 데이터베이스가 없으면 마이크로 서비스 응용프로그램만 만들 수 있다.
  데이터 베이스가 없는 마이크로 서비스는 매우 작고, 레거시 시스템처럼 특정 백엔드에 연결하는데 사용할 수 없습니다.




#### Entity 생성

######엔티티에 대해서 필요한 것
	데이터베이스 테이블 / JPA 엔티티 / Spring 데이터 JPA저장소 / CRUD 연산을 가진 Spring MVC REST Controller
	라우터, 구성요소서비스 / HTML 보기 /

	엔티티간의 관계를 위해서 필요한 것
	데이터베이스 외래키 / 관계를 관리 하기위한 Javascript 코드 


	엔티티 생성 명령어 : jhipster entity [엔티티 명]

	--table-name <table_name> - JHipster는 기본적으로 엔티티 이름을 기반으로 테이블 이름을 생성합니다.이 옵션을 전달하면 다른 테이블 이름을 사용할 수 있습니다.
	--angular-suffix <suffix> - 모든 각도 경로에 사용자 지정 접미사를 지정하려면이 옵션을 사용하여 전달할 수 있습니다.
	--regenerate - 이것은 질문을하지 않고 기존 엔티티를 재생성합니다.
	--skip-server - 서버 측 코드를 건너 뛰고 클라이언트 측 코드 만 생성합니다.
	--skip-client - 이렇게하면 클라이언트 측 코드를 건너 뛰고 서버 측 코드 만 생성합니다.	


	jhipster의 필드 유형
	String, Integer, Long, Float, Double, BigDecimal, LocalDate, Instant, ZonedDateTime, Instant, Boolean, Enumeration, Blob
	
	엔티티는 선택적으로 DTO를 생성해준다.
	



##JHipster Micro-Service 
> 프론트 엔드 ( Angular 프론트 엔드는 게이트 웨이에서 생성됨) 가 있고, JHipster 레지스트리와 함께 작동하여 구성, 검색 및 관리 되는 jhipster 응용프로그램 유형

<br>
#####JHipster Service 특징
- REST API요청을 처리하는 JHipster 생성 응용프로그램
- 마이크로 서비스는 게이트웨이가 존재한다.
- 게이트웨이는 웹트래픽을 처리하고 각도 응용프로그램을 제공하는 jHipster생성 응용프로그램 입니다.(microservice gateway)
- JHipster 레지스트리는 모든 응용프로그램(microservice application) 을 등록하고 구성을 가져오는 런타임 응용프로그램입니다.


<br>
#####마이크서비스 아키텍처에서 엔티티 생성
- microservices 애플리케이션에서 엔티티를 생성 -> Jhipster UML 또는 JDL Studio를 사용하여 복잡한 엔티티 및 관계를 생성할 수있다
- 마이크로서비스에는 Front-end 가 없으므로 Angular JS코드는 생성되지 않습니다. (게이트웨이에서 front-end 단 생성)

일반적으로 새로운 엔티티 생성하거나 마이크로 서비스의 기존 JHipster 구성을 사용하도록 선택할 수 있다.
마이크로 서비스에서 엔티티를 생성하도록 선택한겨우 로컬 컴퓨터에 이 마이크로 서비스의 경로를 입력해야 하며 JHipster는 게이트웨이에서 프런트 엔드 코드를 생성합니다.

<br>
#####Hazelcast를 사용한 분산캐싱
애플리케이션이 SQL 데이터 베이스를 사용한 경우 JHipster는 마이크로 서비스와 함께 2차 수준의 캐싱솔루션을 제안

	- 마이크로서비스가 있는 Jhipster의 기본캐싱 솔루션은 Hazelcast
	- Echache(모놀리식 응용프로그램을 사용하는 기본 솔루션) 을 선택하거나 캐시를 전혀 사용하지 않을 수도 있습니다.
	- 이 솔루션은 마이크로 서비스의 기본값



로컬캐시를 사용하면 서비스 인스턴스에 동기화된 캐시가 없으므로 잘못된 데이터가 발생합니다.
캐시가 없으면 스케일링의 부담이 데이터베이스에 푸시됩니다. 데이터 베이스 성능이 좋지 않습니다.
