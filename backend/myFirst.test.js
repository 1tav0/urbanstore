const { sum, deleteUserById, findUserById } = require('./utils/helper');

let userData = [];
console.log(userData);
beforeEach(() => {
  console.log("running before each test")
})

afterEach(() => {
  console.log("running after each test")
})

beforeAll(() => {
  userData = ["test1", "test2"];
  console.log("runs before all tests", userData);
})

afterAll(() => {
  userData = [];
  console.log("running after all tests have run", userData);
})

//Testing primitive type equality
describe("Number Operations", () => {
  test("1 plus 1 equals to 2", () => {
    let a = 1;
    let b = 1;
    expect(a + b).toBe(2);
  })
  
  test("5 plus 6 is not equal to 10", () => {
    let a = 5;
    let b = 6;
    expect(a + b).not.toBe(10);
  
  })
});

//Testing primitive type equality
describe("Testing other matcher methods", () => {
  test("Testing that a variable is undefined", () => {
    let number = undefined;
    //different matcher method for same thing
    expect(number).not.toBeDefined();
    expect(number).toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  })

  it("Should expect zero to act like zero", () => {
    let number = 0;

    expect(number).toBeDefined();
    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  })

  test("Number Comparison", () => {
    const a = 1;
    const b = 2;
    expect(a + b).toBeGreaterThan(2);
    expect(a + b).toBeGreaterThanOrEqual(3);
    expect(a + b).toBeLessThanOrEqual(3);
    expect(a + b).toBeLessThan(5);
  })

  test("There should be no I in team", () => {
    //teamI passes like so expect(string).toMatch(/I/)
    let string = 'team';

    expect(string).not.toMatch(/I/)
  })

  test("There is 'stop' in chirstopher", () => {
    let string = "christoPher";

    expect(string).toMatch(/stop/i);
  })

  //testing arrays
  const array = ["Milk", "TrashBags", "Paper Towels", "Iphones"];
  test("The shopping list doesnt have ps4", () => {
    expect(array).not.toContain('Ps4');
    expect(array).toContain("Milk")
  })
})

//Testing primitive and reference type equality
describe("Testing reference equality", () => {
  const user = {
    name: "Tavo",
    age: 45
  }
  user['age'] = 45;

  test("Should return a user object with age as 45", () => {
    expect(user).toEqual({
      name: "Tavo",
      age: 45
    })
  })

  test("Should return a user with a name and age key", () => {
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number)
      })
    )
  })

  //Testing ARRAY EQUALITY
  test("Array equality", () => {
    const users = [
      "tavo",
      "bob",
      "joe"
    ]

    users.push("mary");
    expect(users).toEqual(["tavo", "bob", "joe", "mary"]);
    expect(users).toEqual(expect.arrayContaining(["mary"]))
    expect(users).toEqual(expect.arrayContaining([expect.any(String)]))

    const userObjectsArray = [
      {
        user: "tavo",
        age: 28
      },
      {
        user: "bob",
        age: 23
      },
      {
        user: "joe",
        age: 31
      }
    ]

    userObjectsArray.push({
      name: "jhon",
      age: 24
    })

    expect(userObjectsArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number)
        })
      ])
    )

  })
})

//Testing imported functions
describe("Testing imported functions", () => {

  const users = [
    {
      user: "tavo",
      age: 28,
      id: 1
    },
    {
      user: "bob",
      age: 23,
      id: 2
    },
    {
      user: "joe",
      age: 31,
      id: 3
    }
  ]

  test("Sum function should add two numbers together", () => {
    expect(sum(5, 3)).toBe(8);
  })

  test("deleteUserById functions should delete a user from the array", () => {
    expect(deleteUserById(users, 3)).toEqual([
      {
        user: "tavo",
        age: 28,
        id: 1
      },
      {
        user: "bob",
        age: 23,
        id: 2
      }
    ])
    
  })

  test("Finds a user from list of users by id", () => {
    expect(findUserById(users, 2)).toEqual({
      user: "bob",
      age: 23,
      id: 2
    })
    //user is not in the list
    expect(findUserById(users, 10)).toBeUndefined();
  })

})

class Stack{
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    const value = this.items[this.top];
    this.top -= 1;
    return value;
  }
}

describe("The stack", () => {

  let stack;
  beforeEach(() => {
    stack = new Stack();
  })

  it('is created empty', () => {
    //const stack = new Stack();
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  })

  it('can be pushed to the top', () => {
    //const stack = new Stack();
    stack.push('test');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('test');
  })

  it('can pop off from the stack', () => {
    stack.push('test');
    expect(stack.top).toBe(0);
    const poppedValue = stack.pop();
    expect(stack.top).toBe(-1);
    expect(poppedValue).toBe('test');
  })


})