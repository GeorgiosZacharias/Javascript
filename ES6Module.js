
//es6 module = an external file that contains reuseable code
// than can be imported into other javascript files.
// <script type="module" <--- important src=index.js"></script>

const PI = 3.14159;

function getCircumference(radius) {
    return 2 * PI * radius;
}

function getArea(radius) {
    return PI * radius * radius;
}
