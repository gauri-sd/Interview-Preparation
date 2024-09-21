// create a promise which returns true or false
// Basically in this question interviewver wnted to check how i am handling the erros
const a = false;
const p1 = new Promise((res, rej) => {
  if (a) {
    res("a");
  } else {
    rej("Error");
  }
});

console.log(p1);
p1.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

// create 4 prmoises where every promise returns 1,2,3,4 respectevely
// now i want you to throw error in 3rd promise and after that other promises should be excuted successfully,m
// and all promises should be resolved at once
const codEmailTenplate = await this.dbService.getOne(
  this.dbName,
  FULFILLMENT_DB_COLLECTION.EMAIL_TEMPLATES,
  { module: "COD_EMAIL_TEMPLATE" }
);

console.log("codEmailTenplate--------", codEmailTenplate.template);
const a1 = new Promise((res, rej) => {
  res("1");
});
const a2 = new Promise((res, rej) => {
  res("2");
});
const a3 = new Promise((res, rej) => {
  rej(new Error("3"));
});
const a4 = new Promise((res, rej) => {
  res("4");
});

Promise.all([
  a1.catch((err) => err),
  a2.catch((err) => err),
  a3.catch((err) => err),
  a4.catch((err) => err),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// or instead of promise.all you can use Promise.allSettled([]), it will handle all errors
