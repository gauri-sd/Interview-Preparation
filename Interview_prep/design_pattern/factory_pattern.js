const Purpose =  `The Factory Pattern is a creational design pattern that provides an interface
for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created`

const Scenarios = `It is useful when the creation of objects needs to be abstracted from the client code, 
or when there's a need to decouple object creation from the client code by delegating it to subclasses.`



const UseCase = `
 1. We define a Shape class as an interface, with a draw method that must be implemented by its subclasses.
 2.  We define concrete classes (Circle, Rectangle, and Triangle) that extend the Shape class and implement the draw method.
 3. We create a ShapeFactory class responsible for creating instances of different shapes based on a provided shape type.
 4.The ShapeFactory class has a method createShape that takes a shapeType parameter and returns the appropriate shape object.
 5. Finally, we use the factory to create instances of different shapes and call their draw methods.`




class shape{
    draw() {
        throw new Error("error")
    }
}
 
class traingle extends shape{
    draw() {
        console.log("Drwaing traingle")
    }
}
class circle extends shape {
  draw() {
    console.log("Drawing circle");
  }
}


class shapeFactory{
    createShape(shapeType) {
        if (shapeType === 'traingle') {
            return new traingle()
        } else if (shapeType === 'circle') {
            return new circle()
        }
    }
}

const factory = new shapeFactory()
const circlee = factory.createShape('circle')
const trainglee = factory.createShape('traingle')

circlee.draw()