{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface ICommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMaker implements ICoffeeMaker, ICommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    clean(): void {
      console.log('cleaning the machine');
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than zero');
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grindBeans: ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log('heating...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMaker = CoffeeMaker.makeMachine(100);
  maker.fillCoffeeBeans(4);
  maker.makeCoffee(3);

  const maker2: ICoffeeMaker = CoffeeMaker.makeMachine(200);
  maker2.makeCoffee(5);

  const maker3: ICommercialCoffeeMaker = CoffeeMaker.makeMachine(150);
  maker3.makeCoffee(5);
  maker3.clean();

  console.log(maker, maker2, maker3);

  // interface
  class AmateurUser {
    constructor(private machine: ICoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(7);
      console.log(coffee);
    }
  }
  class Barista {
    constructor(private machine: ICommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(7);
      console.log(coffee);
      this.machine.fillCoffeeBeans(33);
      this.machine.clean();
    }
  }

  const maker4: CoffeeMaker = CoffeeMaker.makeMachine(200);
  const amateur = new AmateurUser(maker4);
  const pro = new Barista(maker4);

  amateur.makeCoffee();
  pro.makeCoffee();
}
