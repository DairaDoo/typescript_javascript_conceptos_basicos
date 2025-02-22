interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// this works without using point because it has the same shape.
const point = { x: 12, y: 26 };
logPoint(point);

const otherPoint = {x: 12, y: 26, z: 89};
logPoint(otherPoint); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

// this one fails because it is expecting values x and y
// const color = {hex: "#187ABF"};
// logPoint(color); // logs "undefined, undefined"

class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const NewVPoint = new VirtualPoint(13, 56);
logPoint(NewVPoint); // logs "13, 56"