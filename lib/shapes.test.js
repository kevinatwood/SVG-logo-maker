const {Circle, Triangle, Square} = require("../lib/shape")


test("creating a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})

test("creating a red square", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x = "75" y = "25" height= "150" width = "150" fill= "red"/>');
})

test("creating a purple circle", () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual('<circle r = "100" cx = "150" cy = "100" fill="purple"/>');
})




