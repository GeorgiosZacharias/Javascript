class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0 && typeof newWidth === "number") {
            this._width = newWidth; //_assign to the private _width
        }
        else {
            console.error("width must be positive number");
        }
    }
    set height(newHeight) {
        if (newHeight > 0 && typeof newHeight === "number") {
            this._height = newHeight;
        }
        else {
            console.error("height must be positive number");
        }
    }

    get width() {
        return this._width.toFixed(1);
    }
    get height() {
        return this._height.toFixed(1);
    }
    get area() {
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = new Rectangle(100000, 100000);
rectangle.width = "maria";
// rectangle.width = -5;  wont work 
rectangle.height = 23;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);