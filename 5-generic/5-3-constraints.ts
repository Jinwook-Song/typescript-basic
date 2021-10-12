{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!`);
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수 💩💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // Generic
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);
}
