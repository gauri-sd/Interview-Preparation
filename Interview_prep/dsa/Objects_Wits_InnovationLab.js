//////////////////////////////////   1ST \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const question1 = `Make me a generic fucntion where i can pass key, val, object 
now that fuction is respoinsible for change the value of the particalr key which is passed of the object
eg: obj(Name, Sulaiman, myObject)
       obj (city ,Pune,myObject)
       obj (Marks , 45, myObject)

Now the  myObject should change`;

const myObject = {
  Name: "Random person",
  Address: {
    addressLine1: "SCO 62",
    addressLine2: "City heart",
    city: "Mohali",
    state: "Punjab",
  },
  educationQualification: {
    "10th": {
      Marks: 400,
      Percentage: {
        a: 55,
        b: 99,
      },
    },
    "12th": {
      Marks: 400,
      Percentage: "80%",
    },
    graduation: {
      Marks: 400,
      Percentage: "80%",
    },
    postGraduation: {
      Marks: 4,
      Percentage: "80%",
    },
  },
};

function updateObject(key, value, obj) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = value;
  } else {
    for (prop in obj) {
      if (typeof obj[prop] === "object") {
        const nestedObj = updateObject(key, value, obj[prop]);
      }
    }
  }
}

console.log("BEFORE________", myObject);
updateObject("Name", "Sulaiman", myObject);
updateObject("Marks", 300, myObject["educationQualification"]["10th"]);
updateObject("a", 40, myObject);
console.log("AFTER________", myObject);

//////////////////////////////////   2ND  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const Question_2 =
  " Write a function to recursively traverse a nested object and log all key-value pairs to the console.";

const obj = {
  Name: "John Doe",
  Age: 30,
  Address: {
    City: "New York",
    Country: "USA",
  },
  Interests: ["Reading", "Traveling"],
  Contact: {
    Email: "john@example.com",
    Phone: "123-456-7890",
  },
};

function traverse(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      const nested = traverse(obj[key]);
      console.log("KEY - ", key, "VALUE - Nested Obj");
    } else {
      console.log(`KEY - ${key} && VALUE- ${obj[key]}`);
    }
  }
}

traverse(obj);

//////////////////////////////////   3rd  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const Question_3 =
  "Write a function to filter an object based on a given condition. For example, filter out all properties with values less than a certain threshold.";

const person = {
  name: "John",
  age: 30,
  city: "New York",
  gender: "male",
};
const filteredObj = {};

function filterObject(obj) {
  for (let key in person) {
    if (typeof person[key] !== "string") {
      filteredObj[key] = person[key];
    }
  }
  return filteredObj;
}
console.log(filterObject(person));

//////////////////////////////////   4th  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const question_4 = "Merge 2 objects";

const mergedObj = { ...obj1, ...obj2 };
OR;

const mergedObj1 = {};
for (let key in obj1) {
  mergedObj[key] = obj1[key];
}
for (let key in obj2) {
  mergedObj[key] = obj2[key];
}

//////////////////////////////////   5th  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const myObject = {
//   name: "John",
//   age: 30,
//   gender: "",
//   city: "New York",
//   skills: ["JavaScript", "N/A", "HTML", "", "CSS"],
//   education: {
//     degree: { BE: "N/A", Becom: "YES", arts: "" },
//     year: "N/A",
//   },
// };
// console.log("OLD---", myObject);

// let removedCount = 0;

// function update(obj) {
//   for (let prop in obj) {
//     if (obj[prop] === "N/A" || obj[prop] === "") {
//       delete obj[prop];
//       removedCount++;
//     } else if (Array.isArray(obj[prop])) {
//       let filter = obj[prop].filter((item) => {
//         if (item !== "N/A" && item !== "") {
//           return item;
//         }
//       });
//       let removedCountsfromArray = obj[prop].length - filter.length;
//       removedCount = removedCount + removedCountsfromArray;
//       obj[prop] = filter;
//     } else if (typeof obj[prop] === "object") {
//       update(obj[prop]);
//     }
//   }
//   return obj;
// }

// update(myObject);
// myObject.itmeRemoved = removedCount;
// console.log("ll", myObject);
