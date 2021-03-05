let doSomething = () => new Promise((resolve) => setTimeout(resolve, 250));

function foo(): any {
  debugger;
}

function bar(a: any) {}

async function f1() {
  doSomething();
}

const f2 = async () => {
  doSomething();
};

const f3 = async () => doSomething();

const obj = {
  async method() {
    doSomething();
  },
};

class MyClass {
  async method() {
    doSomething();
  }
}
