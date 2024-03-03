async function main() {
  console.log("\nWelcome to Calc v1\n");

  const readline = require("node:readline");
  const rl = readline.createInterface(process.stdin, process.stdout);

  let num1 = 0;
  let num2 = 0;
  let op1 = "";

  const q1 = () => {
    return new Promise((res, rej) => {
      rl.question("num1: ", (answer) => {
        num1 = Number(answer);
        res();
      });
    });
  };

  const q2 = () => {
    return new Promise((res, rej) => {
      rl.question("num2: ", (answer) => {
        num2 = Number(answer);
        res();
      });
    });
  };

  const op = () => {
    return new Promise((res, rej) => {
      rl.question("operation: ", (answer) => {
        if (answer != "+" && answer != "-" && answer != "*" && answer != "/") {
          rej("Wrong operator");
        }

        op1 = answer;

        res();
      });
    });
  };

  const read = async () => {
    await q1();
    await op();
    await q2();

    let num = calculate(op1, num1, num2);

    if (num == null) {
        console.error("wrong inputs");
    } else {
        console.log("=", num);
    }

    rl.close();
  };

  read();
}

main();

/**
 * calculate two numbers with an operation
 * @param {string} op string
 * @param {number} num_1 number
 * @param {number} num_2 number
 * @returns {number | null}
 */
function calculate(op, num_1, num_2) {
  let result = 0;

  if (op === "+") {
    result = add(num_1, num_2);
  } else if (op === "-") {
    result = sub(num_1, num_2);
  } else if (op === "*") {
    result = mul(num_1, num_2);
  } else if (op === "/") {
    result = div(num_1, num_2);
  } else {
    return null;
  }

  return result;
}

/**
 * add two numbers
 * @param {number} a number
 * @param {number} b number
 * @returns {number}
 */
function add(a, b) {
  const c = a + b;
  return c;
}

/**
 * subtract two numbers
 * @param {number} a number
 * @param {number} b number
 * @returns {number}
 */
function sub(a, b) {
  const c = a - b;
  return c;
}

/**
 * divide two numbers
 * @param {number} a number
 * @param {number} b number
 * @returns {number}
 */
function div(a, b) {
  const c = a / b;
  return c;
}

/**
 * multiply two numbers
 * @param {number} a number
 * @param {number} b number
 * @returns {number}
 */
function mul(a, b) {
  const c = a * b;
  return c;
}

// a + b = c

// 0 == '0' true
// 0 === '0' false

// let obj = { foo: 1 };
// obj.foo; // dot notation
// obj["foo"]; //bracket notation

// [1, 2, 3, 4, 5] // array / list
// [1, 2, , 3, 4, 5] // pushes all successive elements down array O(n) linear
// [1, 2, 9, 3, 4, 5]

// [1] -> [2] -> [3] -> [4] -> [5] // linked list
// [1] -> [2] -> [3] -> [4] -> [5]  add [9] between [2] & [3]
//            [9] -> [3]
// [1] -> [2] -> [9] -> [3] -> [4] -> [5]  // inserts in between two elements O(1) constant

// [1, 2, 3, 4, 5, 6, 7, 8]

// O(n) -> 8
// O(n^2) -> 8*8 = 64
// O(n!) -> (8 * 7 * 6 * 5 ..)
// O(n * log(n))

// 8 * log2(8) => 8 * 3
// 2^? = 8
// 2*2 = 4
// 2*2*2 = 8
// 2^3 = 8
// log2(8) = 3
