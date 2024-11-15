const Q1 = `What is the difference between map & object?`;
const A1 = `
    Map allows you to save any datatype as the key 
    With Object yoy can save the key as string`;

const Q2 = `Pros & cons of hash map`;
const A2 = `
    Pros: 
    - Fast lookups
    - Fast inserts
    - Flexible keys
    
    Cons: 
    - Unordered
    - Slow key iteration`;

const Q3 = `Pros & cons of array`;
const A3 = `
    Pros: 
    - Fast lookups
    - Fast push/pop
    - Ordered
    
    Cons: 
    - Slow inserts
    - Slow deletes
    - Fixed size`;

const Q4 = `Explain hoisting with example`;
const A4 = `
    - Hoisting is a JavaScript mechanism where variables and function declarations are moved 
    to the top of their scope before code execution. This means that hoisted variables and 
    functions are accessible throughout the program. 

    - Hoisting in JavaScript by which you can access the variable & functions even before you 
    have initialized it or you have put some value in it. You can access it without any error.

    Example:
    - Variable Hoisting with var:

        var x;
        console.log(x);  // Output: undefined
        var x = 5;
        console.log(x);  // Output: 5

    - Variable Hoisting with let and const:

        console.log(y);  // ReferenceError: Cannot access 'y' before initialization
        let y = 10;
        console.log(y);  // Output: 10

    -Key Points:
        - Var is hoisted and initialized to undefined, so you can access the variable before its 
        assignment without error.

        - Let and const are hoisted but are in the temporal dead zone until they are 
        initialized, so accessing them before declaration throws a ReferenceError.

        - Function declarations are fully hoisted, allowing them to be called before they 
        appear in the code.
`;

const Q5 = `Explain closure`;
const A5 = `
    - Closure is a function bind together with its lexical environment. Closure means 
    function along with its scope.

    - Lexical environment:
        - Scope means where you can access a specific variable or function in code. Where ever 
        an execution context is created a lexical environment is also created.

        - Lexical environment is the local memory along with the lexical environment of its 
        parent.

        - The whole chain of lexical environment is known as scope chain.
`;

const Q6 = `Explain currying with example`;
const A6 = `
    - Currying is a functional programming technique where a function with multiple arguments 
    is transformed into a sequence of functions, each taking a single argument.

    - Instead of passing all arguments to a function at once, you pass them one at a time, 
    returning a new function at each step that takes the next argument.

    Example:
        function add(x) {
            return function(y) {
                return function(z) {
                    return x + y + z;
                };
            };
        }

        console.log(add(2)(3)(5));  // Output: 10
`;

const Q7 = `Explain Higher Order Functions`;
const A7 = `
    - A higher-order function is a function that takes another function as an argument or 
    returns a function from it.
`;

const Q8 = `Explain event loop`;
const A8 = `
    - The event loop is a concept in JavaScript that handles asynchronous operations. It is a 
    mechanism that allows JavaScript to execute code in a non-blocking manner, allowing it to   
    perform other tasks while waiting for asynchronous operations to complete.
    
    - Callback functions cannot directly go inside call stack. It will go to the call stack 
    through callback queue.

    - The job of event loop is to check callback queue & push callback functions into callstack.
    Event loop over here acts like a get keeper & it checks whether there we have something in 
    callback queue & if we have something it pushes inside call stack & call stack executes 
    callback function.

    - There is a concept of microtask queue which is exactly similar as callback queue but
    it has higher priority. Whatever function will come into this queue will execute first & 
    the functions inside the callback queue are executed later. 
    
    - All the callback functions which comes through the promises will go inside the microtask 
    queue.

    - Suppose there are 3 microtask are pending inside microtask queue & we have one task 
    inside callback queue, so event loop will only give oppourtunity to callback queue task 
    once all the task from microtask queue are completed.

    - If there are multiple task creating in microtask queue & goes on in this case callback 
    queue will never get a chance to execute. Because microtask queue has a higher priority
    that means there is a possibility that the task waiting in callback queue does not get a 
    chance to executed for a long time this situation is called starvation.
`;

const Q9 = `Explain promises`;
const A9 = `
    - Promise is a JavaScript object that represents eventual completion (or failure) of an 
    asynchronous operation.

    - Types of promises:
        - Pending: The initial state of a promise.
        - Fulfilled: The promise has been resolved successfully.
        - Rejected: The promise has been rejected due to an error.
        - Settled: The promise has either been fulfilled or rejected.
`;

const Q10 = `Explain callback`;
const A10 = `
    - Callback is a function passed as an argument to another function. A callback function is
    called after a given task. It allows other code to be run in the meantime and prevents any 
    blocking. 
    
    - Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are 
    written to support callbacks.
`;

const Q11 = `Explain async/await`;
const A11 = `
    - async/await is a JavaScript syntax extension that allows you to write synchronous code    
    to execute asynchronously. It provides a way to handle asynchronous operations in a more 
    concise and readable way.

    - The async keyword is used to declare an asynchronous function, which returns a Promise.
    - The await keyword is used to pause the execution of the function until the Promise is 
    resolved.
`;

const Q12 = `Explain callback hell`;
const A12 = `
    - Callback hell is a common problem in JavaScript. It is a pattern where you have a series 
    of callbacks nested inside each other, making the code difficult to read and maintain.  

    - JavaScript is a synchronous single threded language & it can do only one thing at a time.
    
    - Nested callbacks are form callback hell. It is also known as Pyramid of Doom. It is 
    unreadable & unmanageable. Since we call function inside function in our program will 
    start run horizontally instead of vertically. Parent function will have to manage self 
    response as well as it takes responsibility to execute callback function as well.

    - Issue with this is Inversion of Control:
        - It is like you lose the control of your code when we are using callbacks.
`;

const Q13 = `What is the difference between PUT & PATHCH?`;
const A13 = `
    - PUT is used to update the existing data, while PATCH is used to update the data partially.
`;  

const Q14 = `What is the difference between callback & promise?`;
const A14 = `
    - Callback is a function passed as an argument to another function. A callback function is
    called after a given task. It allows other code to be run in the meantime and prevents any 
    blocking. 
    
    - Promise is a JavaScript object that represents eventual completion (or failure) of an 
    asynchronous operation.
`;

const Q15 = `Explain middleware?`;
const A15 = `
    - Middleware is a function that is executed in the middle of the request-response cycle. 
    It allows you to handle requests before they are sent to the server or after they are 
    received from the server.
`;

const Q16 = `Explain first class functions?`;
const A16 = `
    - First-class functions in JavaScript are functions that can be treated like any other 
    variable. They can be passed as arguments to other functions, returned from functions, and 
    assigned to variables.
`;

const Q17 = `Explain decorator?`;
const A17 = `
    - Decorator is a function that is used to modify or extend the behavior of another function.

    - Decorators are functions that are prefixed with the @ symbol and provide an expressive, 
    declarative way to manage various aspects of application functionality, such as routing, 
    dependency injection, validation, and authorization.
`;

const Q18 = `Explain dependency injection?`;
const A18 = `
    - Dependency Injection (DI) is a design pattern used to make classes or components more 
    modular, testable, and easier to manage by providing them with their dependencies from the 
    outside rather than creating them internally.

    - NestJS has a built-in DI system that provides dependencies automatically, making it easy 
    to manage and use services throughout the application.
`;

const Q19 = `Explain interceptor?`; 
const A19 = `
    - Interceptors are used to modify the request or response object before it is handled by 
    the controller or service.
`;  

const Q20 = `Explain observable?`;
const A20 = `
    - Observables are used to handle asynchronous data streams, especially for tasks where you 
    might want to deal with multiple values over time.

    - Observables are central to Reactive Programming, and in NestJS, they’re supported through 
    RxJS, a popular library for handling asynchronous operations in a reactive way.

    - NestJS fully supports Observables, and they can be used as return types in controllers, 
    services, or any other parts of your application. They are particularly useful for 
    WebSockets, real-time features, or streams where continuous data flow or multiple async 
    events are expected.    
`;  

const Q21 = `ES6 features`;
const A21 = `
    - let and const Keywords
    - Arrow functions
    - Destructuring
    - Template literals
    - Default parameters
    - Rest and Spread Operators
    - Classes
    - Modules
    - Map and Set
    - for...of Loop
`;

const Q22 = `Shallow and deep copy with example`;
const A22 = `
    - Shallow copy: Creates a new object with the same properties as the original object, but 
    the values are references to the original object's values. If the original object changes, 
    the new object will also reflect the change.

    Example:        

    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { ...obj1 };           

    obj1.a = 2;                       
    obj1.b.c = 3;

    console.log(obj1); // { a: 2, b: { c: 3 } }
    console.log(obj2); // { a: 1, b: { c: 2 } }  

    - Deep copy: Creates a new object with the same properties as the original object, but the 
    values are copies of the original object's values. If the original object changes, the new 
    object will not reflect the change.

    Example:

    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { ...obj1 };

    obj1.a = 2;
    obj1.b.c = 3;

    console.log(obj1); // { a: 2, b: { c: 3 } }
    console.log(obj2); // { a: 1, b: { c: 2 } }
`;  

const Q23 = `Difference between auth & OAuth & OAuth2`;
const A23 = `
    - Auth: authentication is the process of verifying that a user is who they say they are. 

    - OAuth: authentication is the process of verifying that a user is who they say they are, 
    and the user has a valid token.

    - OAuth2: authentication is the process of verifying that a user is who they say they are, 
    and the user has a valid token, and the token is valid for the resource being accessed.
`;  

const Q24 = `What are the difference between javascript & typescript?`;
const A24 = `
    - JavaScript is a programming language used to create interactive and dynamic web pages, 
    while TypeScript is a superset of JavaScript that adds static typing and other features.

    - JavaScript is a dynamically typed language, while TypeScript is a statically typed 
    language that compiles to JavaScript.

    - JavaScript is Interpreted language; it’s run directly in the browser or runtime without prior 
    compilation while TypeScript: Requires a compilation step to transpile TypeScript code into JavaScript. 
    The TypeScript compiler (tsc) checks for type errors and then generates JavaScript.

    - JavaScript supports basic OOP concepts like constructors, prototype inheritance, and ES6 classes, but 
    lacks certain features like interfaces or abstract classes while TypeScript is built with OOP in mind, 
    offering features like interfaces, abstract classes, access modifiers (public, private, protected), and 
    more. This makes TypeScript ideal for enterprise-level applications with complex data structures.       
`;

const Q25 = `Expalin execution context in JavaScript`;
const A25 = `
    - Everything in javascript happens inside the execution context. Execution context is an object 
    that contains all the information about the environment in which the code is running.

    - Execution context is created when a function is called, and it is destroyed when the function 
    returns.

    - Execution context is like a big box & it has two components in it. First is memory where all the
    variables & functions are stored as key-value pairs. Memory component is also known as variable environment.
    Second is code component where code is executed one line at a time. It is also known as thread of execution.
    Thread of execution is like a thread in which the whole code is executed one line at a time.

    - JavaScript is a synchronous single threaded language. It can only execute one thing at a time.
`;

const Q26 = `Return a promise that will resolve string after 3 seconds`;
const A26 = `
    function test() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let str = 'Gauri';
                resolve(str);
            }, 3000);
        });
    }

    test()
        .then((data) => {
            console.log("success", data);
        })
        .catch((e) => {
            console.log("error", e);
        })
        .finally(() => {
            console.log("fulfilled");
        });
`;

const Q27 = `Reject a promise that will reject string after 3 seconds`;
const A27 = `    
    function test() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let str = 'Gauri';
                reject(new Error('Something went wrong'));
            }, 3000);
        });
    }

    test()
        .then((data) => {
            console.log("success", data);
        })
        .catch((e) => {
            console.log("error", e);
        })
        .finally(() => {
            console.log("fulfilled");
        });
`;

const Q28 = `What is difference between then, catch & finally`;
const A28 = `
    - Then: It is a callback function that is called when the promise is resolved.
    - Catch: It is a callback function that is called when the promise is rejected.
    - Finally: It is a callback function that is called regardless of whether the promise is resolved or rejected.
`;

const Q29 = `What are the primitive & non-primitive data types in JavaScript?`; 
const A29 = `    
    - Primitive data types: string, number, boolean, null, undefined, symbol
    - Non-primitive data types: object, array, function, date, error, regexp
`;

const Q30 = `What is the difference between == & ===`;
const A30 = `
    - == is a loose equality operator. It performs a type conversion and then checks 
    if the values are equal.
    - === is a strict equality operator. It checks if the values are equal and if the 
    types are also equal.    
`;

const Q31 = `What is the difference between NestJs & Express?`;
const A31 = `
    - NestJS and Express are both popular frameworks for building server-side applications in 
    JavaScript (or TypeScript), but they differ in design philosophy and functionality:

    1. Architecture
    - Express is a minimalist, unopinionated framework. It provides a set of features for handling 
    HTTP requests, routing, and middleware but leaves most of the application's architecture and 
    organization to the developer.

    - NestJS, on the other hand, is a highly opinionated framework built on top of Express (or 
    optionally Fastify) that follows a modular, structured design. It’s inspired by Angular and 
    encourages an MVC (Model-View-Controller) structure, making it well-suited for larger, more 
    complex applications.

    2. TypeScript Support
    - Express is written in JavaScript but can be used with TypeScript by adding type definitions. 
    However, its TypeScript support is not as strong as NestJS.

    - NestJS is built with TypeScript in mind, making it an excellent choice for projects where 
    TypeScript's benefits, like type safety and developer tooling, are essential.

    3. Dependency Injection
    - Express does not have built-in dependency injection, so developers need to manage dependencies 
    manually or use a third-party library if they want DI.

    - NestJS has a powerful built-in dependency injection system, similar to Angular, which helps in 
    managing dependencies, especially in large applications with complex service dependencies.

    4. Modularity and Reusability
    - Express allows developers to structure the app however they like, but it doesn't provide any 
    modular system.

    - NestJS uses a modular approach, making it easy to break down features into modules. This allows 
    for more organized, scalable, and maintainable code, which is particularly useful for 
    enterprise-grade applications.

    5. Learning Curve
    - Express has a gentler learning curve because it is straightforward and does not impose a strict 
    structure.

    - NestJS has a steeper learning curve, especially for developers unfamiliar with Angular or 
    dependency injection patterns. However, once learned, it can be more productive for large 
    projects.
`;

const Q32 = `How worker thread works in Node.js?`;
const A32 = `
    - Worker threads in Node.js are a feature that allows you to run code in a separate thread 
    of execution, separate from the main thread. This means that the main thread can continue 
    executing while the worker thread is working on a separate task.

    - Worker threads in Node.js are created using the child_process module, which allows you to 
    spawn a new process that runs in a separate thread. Once the worker thread is created, you can 
    interact with it using the child_process module.

    - Worker threads in Node.js are useful for performing computationally intensive tasks, such as 
    processing large amounts of data or performing complex calculations. By running these tasks in a 
    separate thread, the main thread can continue executing while the worker thread is working on 
    the task.
`;  