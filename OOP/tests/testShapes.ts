import { Shape, Rectangle, Circle } from "../classes/shapes";

const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Circle(3)
];

// Lambda function (anonymous in-line method that serves a goal)
shapes.forEach(shapes => {
  console.log(shapes.area());
  console.log(shapes.area());
  console.log(shapes.area());
});