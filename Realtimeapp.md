# Building Real-Time Applications
## Todo 모델 실시간 어플리케이션

## Angular2, LoopBack, FireLoop 이용한 통

### strongloop와 angular-cli 설치

	=> npm install -g strongloop angular-cli

### 실시간 어플리케이션의 소스를 만들 폴더 생성

=> mkdir todo-project

![create](https://github.com/yangcheollee/team-asan/blob/master/img/170706_1.png?raw=true)

### loopback 생성 후 

![create](https://github.com/yangcheollee/team-asan/blob/master/img/170706_2.png?raw=true)

	=> install --save @mean-expert/loopback-sdk-builder
	=> install --save @mean-expert/loopback-component-realtime


### todo-api폴더의 server/server.js

app.start = function() {

  // start the web server

  var server = app.listen(function() {


    app.emit('started', server);

    var baseUrl = app.get('url').replace(/\/$/, '');

    console.log('Web server listening at: %s', baseUrl);

    if (app.get('loopback-component-explorer')) {

      var explorerPath = app.get('loopback-component-explorer').mountPath;

      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }

  });
  return server;

};

	=> 기존의 작성되어져 있는 app.start를 변경


### todo-api폴더의 server/component-config.json 수정

{

  "loopback-component-explorer": { "mountPath": "/explorer"},



  "@mean-expert/loopback-component-realtime": { "auth": false }

 }


### todo-api/package.json 추가

  "scripts": {
    "build:sdk": "./node_modules/.bin/lb-sdk server/server ../todo-app/src/app/shared/sdk"
  },

### Todo 모델생성


![create](https://github.com/yangcheollee/team-asan/blob/master/img/170706_3.png?raw=true)



### Angular2 어플리케이션 생성


![create](https://github.com/yangcheollee/team-asan/blob/master/img/170706_4.png?raw=true)

	=> 실행

###  FireLoop SDK 빌드

	=> cd todo-api
	=> npm run build:sdk

### FireLoop SDK dependencies 설치

	=> cd ../todo-app
	=> npm install --save socket.io-client @types/socket.io-client

### todo-app폴더의 src/tsconfig.json 파일을 추가

{
  "compilerOptions": {
    "types": [
      "socket.io-client"]}}


### todo-app/src/app/app.module.ts 수정

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { SDKModule } from './shared/sdk';

import { AppComponent } from './app.component';

@NgModule({

  declarations: [
    AppComponent
  ],

  imports: 

[
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKModule.forRoot()
  ],

  providers: [],

  bootstrap: 

[AppComponent]

})

export class AppModule {}


### todo 로직 추가 생성

**todo-app/app/app.component.ts**

import { Component } from '@angular/core';

import { Todo, FireLoopRef } from './shared/sdk/models';

import { RealTime } from './shared/sdk/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'TODO Application';

  private todo      : Todo = new Todo();
  private todos     : Observable<Todo[]>;
  private reference : FireLoopRef<Todo>;

  constructor(private rt: RealTime) {

    this.reference = this.rt.FireLoop.ref<Todo>(Todo);
    this.todos = this.reference.on('changes', {
      offset: 0,
      limit: 10,
      order: 'id DESC'
    });
  }


  add(): void {

    this.reference.create(this.todo).subscribe(() => this.todo = new Todo());

  }

  update(todo: Todo): void {

    this.reference.upsert(todo).subscribe();

  }

  remove(todo: Todo): void {

    this.reference.remove(todo).subscribe();

  }

}


### 화면에 보여줄 app.component.html 수정

**todo-app/app/app.component.html**

 <'h1>
  {{title}}
<'/h1>

<'form (submit)="add()">

  <input type="text" name="todo" [(ngModel)]="todo.text" placeholder="Add Todo" />

  <'button>Add<'/button>

</form>

<'ul>

  <'li *ngFor="let todo of reference.on('changes') | async">

    <'input type="text" name="todo" [(ngModel)]="todo.text" />

    <'button (click)="update(todo)">update<'/button>

    <'button (click)="remove(todo)">remove<'/button>

  <'/li>
<'/ul>

### todo-app/src/app/app.component.ts 수정

import { Component } from '@angular/core';

import { Todo, FireLoopRef } from './shared/sdk/models';

import { RealTime } from './shared/sdk/services';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'TODO Application';

  private todo      : Todo = new Todo();

  private todos     : Observable<Todo[]>;

  private reference : FireLoopRef<Todo>;

  constructor(private rt: RealTime) {

    this.reference = this.rt.FireLoop.ref<Todo>(Todo);
    this.todos = this.reference.on('changes', {
      offset: 0,
      limit: 10,
      order: 'id DESC'
    });
  }


  add(): void {

    this.reference.create(this.todo).subscribe(() => this.todo = new Todo());

  }

  update(todo: Todo): void {

    this.reference.upsert(todo).subscribe();

  }

  remove(todo: Todo): void {

    this.reference.remove(todo).subscribe();

  	}

}


### TEST

#### Server 테스트

![create](https://github.com/yangcheollee/team-asan/blob/master/img/170706_5.png?raw=true)

#### 정상적으로 서버동작

![create](https://github.com/yangcheollee/team-asan/blob/master/img/170706_7.png?raw=true)


#### Client 테스트

![create](https://github.com/yangcheollee/team-asan/blob/master/img/170706_6.png?raw=true)


	=> Client 동작시 오류발생