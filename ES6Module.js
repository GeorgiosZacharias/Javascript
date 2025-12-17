
//es6 module = an external file that contains reuseable code
// than can be imported into other javascript files.
// <script type="module" <--- important src=index.js"></script>

export const PI = 3.14159;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}
