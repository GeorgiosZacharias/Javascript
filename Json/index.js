//JSON.stringify() = converts a js object to a json string
//JSON.parse() = converts a json string to a js object

const jsonNames = `["george", "patrick"]`;
const JsonPerson = `{
    "name": "George", "age": 26, "isEmployed": true, "hobbies": ["programming", "gaming"]
}`;
const JsonPeople = `[{
    "name": "George", "age": 26, "isEmployed": true, "hobbies": ["programming", "gaming"]
},
{
    "name": "Patrick", "age": 27,
    "isEmployed": false, "hobbies": ["dancing", "gaming"]
}]`;

const parsedData = JSON.parse(jsonNames);
const parsedData1 = JSON.parse(JsonPerson);
const parsedData2 = JSON.parse(JsonPeople);
//console.log(parsedData);
//console.log(parsedData1);
//console.log(parsedData2);
//console.log(jsonNames);
//console.log(JsonPerson);
//console.log(JsonPeople);


fetch("person.json") //returns a promise
    .then(response => response.json()
        .then(value => console.log(value)))
    .catch(error => console.error(error)); //returns a promise

fetch("people.json") //returns a promise
    .then(response => response.json()
        .then(values => values.forEach(value => console.log(value.name)))
        .catch(error => console.error(error)));