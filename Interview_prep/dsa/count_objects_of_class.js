//  program to get count of total objects cretaed

//////////////////////////   1st approach ( wrong approach) without using static

class myclass {
  static count = 0;
  constructor() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}

const obj1 = new myclass();
const obj2 = new myclass();
const obj3 = new myclass();

console.log(obj3.getCount());

// In above  scenario, console.log would only print 1 because it would access the count property of obj3, which is
//  just its own local count(incremented to 1).It wouldn't reflect the total number of objects (3) created.
//  each MyClass object would have its own count property, leading to inaccurate object counts

/////////////////////////// 2nd approach with STATIC ////////////////////////////////////

class myclass1 {
  static count = 0;
  constructor() {
    myclass1.count++;
  }

  static getCount() {
    return this.count;
  }
}

const obj5 = new myclass1();
const obj6 = new myclass1();
const obj7 = new myclass1();

console.log(myclass1.getCount());
