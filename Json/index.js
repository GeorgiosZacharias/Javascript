const names = ["george", "patrick"];

const jsonString = JSON.stringify(names);

const person = {
    "name": "George",
    "age": 26,
    "isEmployed": true,
    "hobbies": [
        "programming",
        "gaming"
    ]
};

const jsonStringPerson = JSON.stringify(person);

const people = [
    {
        "name": "George",
        "age": 26,
        "isEmployed": true,
        "hobbies": [
            "programming",
            "gaming"
        ]
    },
    {
        "name": "Patrick",
        "age": 27,
        "isEmployed": false,
        "hobbies": [
            "dancing",
            "gaming"
        ]
    }
];

const jsonStringpeople = JSON.stringify(people);

console.log(jsonString);
console.log(jsonStringPerson);
console.log(jsonStringpeople);