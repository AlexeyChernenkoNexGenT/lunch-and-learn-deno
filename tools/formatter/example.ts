// deno-fmt-ignore
export const identity = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
];

interface MyInterface {
    foo(): string,
    bar: Array<number>,
  }
  
  export abstract class Foo implements MyInterface {
    foo() {
              // TODO: return an actual value here
          return 'hello'
        }
    get bar() {
      return [  1,
  
        2, 3,
      ]
    }
  }
  
  type RequestType = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'OPTIONS' | 'CONNECT' | 'DELETE' | 'TRACE'
