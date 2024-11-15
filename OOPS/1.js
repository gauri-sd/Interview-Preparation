const Q1 = `OOP Concepts with example`;
const A1 = `
    - Abstraction: 
        Hiding somthing from the outside world.

    - Encapsulation:
        Encapsulation is the concept of binding properties and methods together in a single unit.

    - Inheritance: 
        Inheritance is a mechanism in which one class inherits the properties and methods of another
        class.

    - Polymorphism
        Polymorphism is the ability of objects to take on many forms.
`;

const Q2 = `Static keyword`;
const A2 = `
    - Static keyword is used to create a static member in a class.
    - Static members are shared by all instances of a class.
    - The static keyword is used to define methods and properties that belong to a class rather than 
    to instances of the class. You can access static members directly from the class itself, without 
    needing to create an instance.
`;

const Q3 = `Constructor`;
const A3 = `
    - Constructor is a special method that is called when an object is created from a class. 
    It is used to initialize the object's properties and perform any necessary setup.
`;

const Q4 = `Derived class`;
const A4 = `
    - Derived class is a class that inherits properties and methods from a base class. 
    It is a subclass of the base class.
`;  

const Q5 = `Super keyword`;
const A5 = `
    - Super keyword is used to access the base class's properties and methods.
`;  

const Q6 = `Can a child class access a static method from its parent class? If so, how?`    
const A6 = `
    - Yes, a child class can access a static method from its parent class but it does not get inherited in the 
    usual sense. Instead, it is accessible directly on the child class itself, as long as the child class does 
    not override it.

    - Super keyword is used to access the base class's properties and methods.
`;

const Q7 = `Types of inheritance and explain them`;
const A7 = `
    - Single inheritance: 
        In single inheritance, a derived class inherits properties and methods from a single base class.

    - Multiple inheritance: 
        In multiple inheritance, a derived class inherits properties and methods from multiple base classes.

    - Multilevel inheritance: 
        In multilevel inheritance, a derived class inherits properties and methods from a single base class, 
        which in turn inherits properties and methods from another base class.

    - Hierarchical inheritance: 
        In hierarchical inheritance, multiple derived classes inherit properties and methods from a single base
        class.

    - Hybrid inheritance: 
        In hybrid inheritance, multiple derived classes inherit properties and methods from multiple base 
        classes.
`;