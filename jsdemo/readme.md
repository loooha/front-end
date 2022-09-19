## 자바스크립트 코딩 규약

### 명명표기법

1. 명명표기법: 명명규칠을 의미한다.
2. 식별자의 명칭은 프로젝트, 프로그래밍언어, 개발도구 등에 따라 다를 수 있다.
3. 명명 표기법을 따르는 목적은 기독성, 효율성을 높이기 위해서다.
4. 대표적인 표기법 종류: 헝가리안 표기법, 카멜 표기법, 파스칼 표기법, 스네이크 표기법

### 자바스크립트에서는 주로 카멜표기법과 파스칼 표기법을 사용

- 카멜 표기법
  : 이름의 시작은 소문자 두번째 단어부터 그 단어의 시작글자만 대문자로 표기하는 방법. (ex. mainMenu )

- 파스칼 표기법
  : 모든 단어의 첫글자를 대문자로 표기하는 방법. (ex. MainMenu)

### 변수 선언 규칙

- 첫 글자는 숫자 포함 불가 (123st ...)
- 첫 글자 이후의 글자는 숫자도 포함 가능 (one1, two2 ...)
- 특수기호는 $와 \_만 가능
- 대소문자를 구분 ('nama'와 'Nama'는 다른 변수)
- 'var'등의 자바스크립트 내부 키워드는 사용 불가

### 변수 선언 3단계

1단계 선언(Declaration)

> 변수를 선언하여 자바스크립트 엔진에 변수를 알린다. 즉 내부적으로 실행 컨텍스트가 생성되고 그 안에서 관리하게 된다.

2단계 초기화(Initializtion)

> 변수값을 저장하기 위한 메모리 공간을 확보하고 값을 undefined로 초기화한다.

3단계 할당

> undefined로 초기화 된 변수에 실제 값을 할당한다.

### 호이스팅(Hoisting)이란?

- 자바스크립트는 실행될 떄 모든 선언(var, let, function, class)을 호이스팅 한다.
- 변수나 함수 선언들은 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 개념이다.
-

#### 호이스팅 대상

var 키워드로 선언된 변수는 hoisting 가능하지만, let과 const 키워드 선언된 변수 또는 함수표현식으로 hoisting 안된다.

> - var키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 같이 실행된다.
> - let, const 키워드는 선언한 변수는 선언단계와 초기화 단계가 분리되어 진행된다.
> - 해당코드가 실행되기 전까지는 초기화가 되지 않아 일시적 사각지대에 빠져 호이스팅이 일어나지 않는 것처럼 보인다. (Reference Errer)