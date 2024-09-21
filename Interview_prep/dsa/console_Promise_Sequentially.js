function ex() {
  console.log("a");

  let pro1 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("b");
      res("Result from pro1");
    }, 1000);
  });

  pro1
    .then((result) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          console.log("c");
          res();
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          console.log("d");
          res();
        }, 1000);
      });
    })
    .then((result) => {
      console.log("e");
    });
}

ex();

async function consoleSequentially() {
  console.log("a");

  let promise1 = await new Promise((res, rej) => {
    setTimeout(() => {
      res("b");
    }, 1000);
  });
  console.log(promise1);
  let promise2 = await new Promise((res, rej) => {
    setTimeout(() => {
      res("c");
    }, 2000);
  });
  console.log(promise2); // Log the resolved value "b"

  console.log("e");
}

consoleSequentially();

async function x() {
  console.log("A");
  let pr1 = await new Promise((res, rej) => {
    setTimeout(() => {
      res();
      console.log("B");
    }, 2000);
  });
  let pr2 = await new Promise((res, rej) => {
    setTimeout(() => {
      res();
      console.log("C");
    }, 1000);
  });

  console.log("D");
}
x();
console.log("E");
