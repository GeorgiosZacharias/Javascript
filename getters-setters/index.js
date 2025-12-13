class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth; //_assign to the private _width
        }
        else {
            console.error("width must be positive");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("height must be positive");
        }
    }
}

const rectangle = new Rectangle(-100000, -100000);

console.log(rectangle.width);
console.log(rectangle.height);